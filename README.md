<div align="center">

# pentest-harness · Dockerized

### Run the [pentest-harness](https://github.com/S1N6H/pentest-harness) AI pentest agent in one command, with Docker.

[![License: MIT](https://img.shields.io/badge/License-MIT-4da3ff.svg)](LICENSE)
[![Docker](https://img.shields.io/badge/run-docker%20compose-2496ED?logo=docker&logoColor=white)](#quick-start)
[![Upstream](https://img.shields.io/badge/upstream-S1N6H%2Fpentest--harness-6f7bff.svg)](https://github.com/S1N6H/pentest-harness)

</div>

This repository vendors the **official pentest-harness** source and adds a
container setup so anyone can run it with Docker — no local Node/pnpm toolchain,
no manual monorepo build. Bring your own LLM API key.

> This is a **community Docker packaging**, not an official release. All harness
> code and credit belong to the upstream project
> ([S1N6H/pentest-harness](https://github.com/S1N6H/pentest-harness), MIT, © 2026
> DeepSeek). This repo only adds `Dockerfile`, `docker-compose.yml`,
> `docker/entrypoint.sh`, `.dockerignore` and `.env.example`. The original
> project docs are kept in [`UPSTREAM_README.md`](UPSTREAM_README.md).

---

## ⚠️ Safety first

The harness is an autonomous agent that **runs real shell commands** to do its
work. Treat it like a loaded tool:

- Only point it at systems you are **authorized** to test.
- Its web UI binds to **`127.0.0.1` only** and is published to the host
  loopback only — do **not** expose port 2323 to a network.
- Run it against targets on an **isolated lab network**, not production.

---

## Quick start

**Requirements:** Docker with the Compose plugin. That's all — the image builds
the whole monorepo for you.

```bash
git clone https://github.com/nipunnegi2/harness-docker.git
cd harness-docker

cp .env.example .env            # then paste your LLM API key into .env
docker compose up --build
```

First build takes a few minutes (it installs dependencies and builds the
monorepo). When it's ready, open:

```
http://127.0.0.1:2323
```

Configure your provider in the UI (or persisted settings — see below), give the
agent a goal, and go. To stop: `Ctrl-C`, then `docker compose down`.

### Bring your own key

Put **one** provider's key in `.env` (it's git-ignored):

| Provider | Variable | Notes |
|----------|----------|-------|
| OpenAI / OpenAI-compatible | `OPENAI_API_KEY` | |
| Anthropic | `ANTHROPIC_API_KEY` | |
| DeepSeek | `DEEPSEEK_API_KEY` | `api.deepseek.com` — paid, no free tier |

Your harness settings and credentials live in a named volume
(`harness-dsh` → `/opt/pentest-harness/.dsh`), so provider config persists
across restarts. Telemetry stays **disabled** unless you set
`DSH_TELEMETRY_MODE`.

---

## Run a one-shot task (headless)

Besides the web UI, you can drive the agent non-interactively and capture the
full transcript:

```bash
docker exec -e DSH_PERMISSION_MODE=danger-full-access harness \
  sh -c 'cd /opt/pentest-harness && pnpm dsh --profile headless "Assess http://TARGET and report findings"'
```

`danger-full-access` auto-approves the agent's tool calls (the headless default
policy is `ask`, which blocks in a non-interactive run). **Only use it against a
target you own in an isolated lab** — it lets the agent run commands unattended.

---

## What this repo adds

| File | Purpose |
|------|---------|
| `Dockerfile` | Builds the monorepo; symlinks the `@pentest-harness/*` workspace packages so the auto-generated web profile can resolve its plugins |
| `docker/entrypoint.sh` | Runs `dsh web` on loopback and `socat`-forwards the published port to it |
| `docker-compose.yml` | One-command build/run; loopback-only port, env-based keys, a volume for persistent settings |
| `.dockerignore` | Keeps the build context lean and excludes any local secrets |
| `.env.example` | Template for your API key(s) |

### Why the socat forward?

The harness refuses to bind its UI to a network interface (the agent can run
shell commands), so it listens on `127.0.0.1` inside the container. The
entrypoint forwards a container-external port to that loopback address, and
Compose publishes it to the host's `127.0.0.1` only. Net effect: the UI is
reachable from your machine and nowhere else.

---

## License & attribution

The harness source is licensed **MIT** by its authors (© 2026 DeepSeek); see
[`LICENSE`](LICENSE) and [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md). The
Docker packaging in this repo is provided under the same MIT terms. For the full
project documentation, features and usage, see
[`UPSTREAM_README.md`](UPSTREAM_README.md) and the upstream repository:
<https://github.com/S1N6H/pentest-harness>.
