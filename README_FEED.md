# Newsletter Feed — GitHub Actions + OpenAI
Gera `feed.json` diariamente e melhora títulos/resumos em **PT-BR** usando OpenAI.

## Como usar
1) Suba esta pasta na raiz do repo (mantendo `.github/workflows/...`).
2) Em **Settings → Secrets and variables → Actions → New repository secret** crie:
   - `OPENAI_API_KEY` (sua chave)
3) Em **Actions**, rode manualmente uma vez (*Run workflow*). Depois roda todo dia por cron.

## Ajustes
- Horário: `.github/workflows/generate-feed.yml` (cron em UTC)
- Fontes/limites: `generator/config.json`
- Modelo OpenAI: `build.js` (const `model`). Atualmente `gpt-4o-mini`.

Nada de n8n: tudo aqui roda 100% dentro do GitHub.
