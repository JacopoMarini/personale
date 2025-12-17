# Istruzioni per pubblicare su GitHub

## Passo 1: Crea il repository su GitHub

1. Vai su [GitHub.com](https://github.com) e accedi al tuo account
2. Clicca sul pulsante "+" in alto a destra e seleziona "New repository"
3. Nome del repository: `personale` (o un altro nome a tua scelta)
4. Scegli se renderlo pubblico o privato
5. **NON** inizializzare con README, .gitignore o licenza (abbiamo già tutto)
6. Clicca su "Create repository"

## Passo 2: Collega il repository locale a GitHub

Esegui questi comandi nel terminale (sostituisci `TUO_USERNAME` con il tuo username GitHub):

```bash
git remote add origin https://github.com/TUO_USERNAME/personale.git
git branch -M main
git push -u origin main
```

Se il tuo repository si chiama diversamente, sostituisci `personale` con il nome che hai scelto.

## Passo 3: Abilita GitHub Pages (opzionale)

Per pubblicare il sito web su GitHub Pages:

1. Vai nelle impostazioni del repository su GitHub
2. Scorri fino a "Pages" nella sidebar
3. Sotto "Source", seleziona "GitHub Actions"
4. Il workflow di deploy si attiverà automaticamente ad ogni push

Il sito sarà disponibile su: `https://TUO_USERNAME.github.io/personale/`

## Dominio personalizzato (es. jacopomarini.it)

Se vuoi pubblicare il sito sul tuo dominio:

1. GitHub → **Settings → Pages**
2. In **Custom domain** inserisci `jacopomarini.it` (o `www.jacopomarini.it`)
3. Attendi la verifica DNS, poi abilita **Enforce HTTPS**
4. Configura i record DNS dal provider del dominio (vedi guida GitHub)

## Note

- Se deployi su `https://<user>.github.io/<repo>/`, imposta `base: '/<repo>/'` in `vite.config.ts`
- Se deployi su un **dominio custom**, imposta `base: '/'`
- Il workflow GitHub Actions pubblicherà automaticamente il sito ad ogni push sul branch main/master

