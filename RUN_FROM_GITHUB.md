# Pentest Harness — Run from GitHub

This document walks through publishing this folder to GitHub and running the
project locally on port **2323**.

---

## 1. Publish to GitHub

1. Create a new repository on GitHub (e.g. `pentest-harness`). Do **not** add a
   README or `.gitignore` — this folder already has both.
2. Open a terminal in this folder:

   ```sh
   cd ~/Desktop/pentest-harness-github
   git init
   git add .
   git commit -m "Initial release of Pentest Harness"
   git branch -M main
   git remote add origin https://github.com/<your-user>/pentest-harness.git
   git push -u origin main
   ```

3. Done — anyone can now clone and run it.

---

## 2. Run locally (anyone, from GitHub)

### Requirements

- **Node.js 20+** (Node 22 recommended) — https://nodejs.org
- **pnpm** — install once with `npm i -g pnpm`

### Clone and run

```sh
git clone https://github.com/<your-user>/pentest-harness.git
cd pentest-harness
pnpm install
pnpm build
pnpm dsh web
```

The Web UI opens at **http://127.0.0.1:2323** in your default browser.

> If `pnpm dsh` is not found, use `pnpm exec dsh web` or
> `node apps/cli/lib/index.js web`.

### Other port

```sh
pnpm dsh web --port 3000
```

---

## 3. Add your own model provider (first run)

1. Open **Settings → Models**.
2. Click **Add a custom provider**.
3. Paste your API base URL — the provider ID and display name auto-fill.
4. Enter your API key. It is stored in your local credential store
   (`~/.dsh/.credentials.yaml`, owner-only permissions) and never appears in
   settings or logs.
5. Models auto-discover from the endpoint — click one to add it, or add by hand.
6. Pick the model in the composer and start your engagement.

---

## 4. Production notes

- The default port is **2323** (configurable with `--port`).
- Settings live in `~/.dsh/settings.yaml`; credentials in `~/.dsh/.credentials.yaml`.
- `pnpm build` produces the optimized bundles served by the Web UI.
- No telemetry is shipped. No API keys are committed. Everything stays local.
