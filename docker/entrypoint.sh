#!/usr/bin/env bash
set -e

# The harness binds its web UI to 127.0.0.1 only (its agent can run shell
# commands, so it refuses to listen on a network interface). To reach the UI
# from the host we run the harness on loopback and forward a container-external
# port to it with socat. docker-compose.yml publishes that port to the host's
# 127.0.0.1 ONLY, so the UI stays reachable from this machine and nowhere else.
HARNESS_PORT=2324
PUBLIC_PORT=2323

socat TCP-LISTEN:${PUBLIC_PORT},fork,reuseaddr TCP:127.0.0.1:${HARNESS_PORT} &

exec pnpm dsh web --port ${HARNESS_PORT}
