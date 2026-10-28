<div align="center">

<img src="docs/images/pentest-harness-banner-1200.png" alt="Pentest Harness — Heaven for Hackers" width="100%" />

# Pentest Harness

**Heaven for Hackers** — the professional security testing workspace.

An open-source, dark-first AI agent harness for authorized penetration tests, bug bounty
research, security labs, and CTF engagements. Built on a plugin architecture where every
layer — model adapters, tools, sessions, settings, and credentials — is replaceable from
configuration.

**Works with any AI model API.** Bring your own key from OpenAI, Anthropic, DeepSeek,
Google, Mistral, Groq, OpenRouter, Azure OpenAI, or any OpenAI-compatible gateway — one
click auto-discovers your models and you're running.

</div>

---

## Screenshots

| Workspace | Provider cards |
|:---:|:---:|
| <img src="docs/images/screenshot-hero.png" alt="Pentest Harness workspace" width="420" /> | <img src="docs/images/screenshot-models.png" alt="Pentest Harness provider cards" width="420" /> |

---

## Features

- **Multi-provider LLM engine** — OpenAI Chat Completions & Responses, Anthropic Messages, DeepSeek, and any custom OpenAI-compatible gateway with one-click model auto-discovery
- **Full agent toolset** — shell, filesystem, web research, skills, goals, subagents, background jobs, and workflow control
- **Pentest Mode** — a professional offensive-security operating standard for authorized engagements
- **Provider cards** — live connection testing, enabled/disabled toggles, per-model context badges
- **Durable sessions** — JSONL/SQLite persistence with replay; resume exactly where you left off
- **Context that never dies** — token metering, automatic compaction, and tool-result pruning
- **Secure by default** — API keys live in an owner-only credential store as references; never in settings files or logs
- **Dark-only theme** — a focused, low-glare interface built for long engagements
- **Everything is a plugin** — built on Cordis; no closed core to fight

---

## Demo

<img src="docs/media/pentest-harness-demo.gif" alt="Pentest Harness demo" width="100%" />

Download the full video

---

## Quick start

```sh
git clone https://github.com/S1N6H/pentest-harness.git
cd pentest-harness
pnpm install
pnpm build
pnpm dsh web
```

The Web UI opens at **http://127.0.0.1:2323** in your browser.

> If `pnpm dsh` is not on your PATH, use `pnpm exec dsh web` or
> `node apps/cli/lib/index.js web`.

### Requirements

- **Node.js 20+** (Node 22 recommended)
- **pnpm** (`npm i -g pnpm`)

### Run on another port

```sh
pnpm dsh web --port 3000
```

---

## First run — connect any AI model

1. Open **Settings → Models**.
2. Click **Add a custom provider** (or **Edit** an existing one).
3. Paste your API base URL — the provider ID and display name auto-fill.
4. Enter your API key (stored in your local credential store, never in settings).
5. Models auto-discover from the endpoint — click one to add it, or add by hand.
6. Pick a model in the composer and start your engagement.

---

## Defaults

| Setting | Value |
|---|---|
| Web UI | `http://127.0.0.1:2323` |
| Settings file | `$DSH_HOME/settings.yaml` (default `~/.dsh/settings.yaml`) |
| Credentials | `$DSH_HOME/.credentials.yaml` (owner-only permissions) |

---

## License

MIT

---

<div align="center">

### ⚡ Sponsored by HackWithClaude

<br/>

<p>
  <a href="https://hackwithclaude.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/HackWithClaude-Elevate%20Your%20AI%20Game-4D6BFE?style=for-the-badge&logo=claude&logoColor=white&labelColor=18181B"
         alt="HackWithClaude — Elevate Your AI Game" />
  </a>
</p>

**Unlimited AI models · One platform · Zero limits**

Access every major model — Claude, GPT, Gemini, and more — in one place.
Built for builders who ship.

🚀 Visit HackWithClaude.com · 💡 Explore the models

</div>
