# pentest-harness, containerised.
#
# Builds the official pentest-harness monorepo (vendored in this repo) into a
# runnable image. Bring your own LLM API key at runtime (see .env.example).
#
#   docker compose up --build        # web UI on http://127.0.0.1:2323
#
FROM node:22-slim

# git + build toolchain for native deps; socat to forward the loopback-only UI.
RUN apt-get update && apt-get install -y --no-install-recommends \
        git ca-certificates python3 make g++ socat \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable

WORKDIR /opt/pentest-harness

# Vendored source is copied in (node_modules / build output are .dockerignored).
COPY . /opt/pentest-harness

# Build the monorepo. Fall back to a non-frozen install if the lockfile drifts.
RUN pnpm install --frozen-lockfile || pnpm install
RUN pnpm build

# The `dsh web` profile is auto-generated to `import` workspace plugin packages
# by name (e.g. @pentest-harness/dsh-client-ui-workflow). pnpm only symlinks
# *declared* deps into the root node_modules, so most plugins aren't resolvable
# from the generated profile dir. Symlink every @pentest-harness workspace
# package into the repo's node_modules so Node can resolve them, and keep
# DSH_HOME inside the repo so module resolution walks up into that node_modules.
RUN set -e; mkdir -p node_modules/@pentest-harness; \
    for pj in $(find packages apps -name package.json -not -path "*/node_modules/*"); do \
        name=$(node -pe "require('./$pj').name || ''" 2>/dev/null || true); \
        case "$name" in \
            @pentest-harness/*) \
                short="${name#@pentest-harness/}"; \
                ln -sfn "/opt/pentest-harness/$(dirname "$pj")" \
                        "node_modules/@pentest-harness/$short" ;; \
        esac; \
    done; \
    echo "linked @pentest-harness packages: $(ls node_modules/@pentest-harness | wc -l)"

# DSH_HOME holds settings + credentials; kept inside the repo so the generated
# web profile can resolve the workspace plugin packages linked above. Mount a
# volume here (see docker-compose.yml) to persist your provider config.
ENV DSH_HOME=/opt/pentest-harness/.dsh

EXPOSE 2323

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
CMD ["/usr/local/bin/entrypoint.sh"]
