# Portfolio Personale - Jacopo Marini

Sito web personale sviluppato con React, TypeScript e Vite.

## 🚀 Tecnologie Utilizzate

- **React 18** - Libreria UI
- **TypeScript** - Tipizzazione statica
- **Vite** - Build tool e dev server
- **CSS3** - Styling moderno e responsive

## 📦 Installazione

Assicurati di avere Node.js installato (versione 18 o superiore), poi:

```bash
npm install
```

## 🛠️ Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run lint` - Esegue il linter

## 📁 Struttura del Progetto

```
├── src/
│   ├── components/      # Componenti React
│   │   ├── Header.tsx   # Header con navigazione
│   │   ├── About.tsx    # Sezione Chi Sono
│   │   ├── Experience.tsx # Sezione Esperienza
│   │   ├── Skills.tsx   # Sezione Competenze
│   │   └── Contact.tsx  # Sezione Contatti
│   ├── App.tsx          # Componente principale
│   ├── main.tsx         # Entry point
│   └── index.css        # Stili globali
├── index.html           # HTML principale
└── package.json         # Dipendenze e script
```

## 🎨 Caratteristiche

- Design moderno e responsive
- Navigazione fluida tra sezioni
- Animazioni e transizioni smooth
- Ottimizzato per mobile e desktop
- SEO-friendly

## 📝 Personalizzazione

Puoi facilmente personalizzare:
- Colori nel file `src/index.css` (variabili CSS)
- Contenuti nei componenti delle sezioni
- Layout modificando i file CSS dei componenti

## 🌐 Deploy

Il progetto può essere deployato su:
- Vercel
- Netlify
- GitHub Pages
- Qualsiasi hosting statico

Per il deploy, esegui `npm run build` e carica la cartella `dist` generata.

