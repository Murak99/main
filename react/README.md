# Vokabeltrainer als React-Komponente

Der Trainer bleibt eine einzige, eigenständige HTML-Datei (`vokabeltrainer.html`).
Die Komponente hier bindet ihn **unverändert** in eine React-App ein —
Farben, das moderne Design, das Quiz und die Umdreh-Karten bleiben 1:1 erhalten.

```jsx
import VokabelTrainer from "./VokabelTrainer";

function App() {
  return <VokabelTrainer />;
}
```

## Einbau in eine React-App (z. B. Vite)

1. React-App anlegen (falls noch keine existiert):
   ```bash
   npm create vite@latest meine-app -- --template react
   cd meine-app && npm install
   ```
2. `vokabeltrainer.html` (aus dem Repo-Root) in den Ordner **`public/`** der React-App kopieren.
3. `src/App.jsx` und `src/VokabelTrainer.jsx` aus diesem Ordner nach **`src/`** kopieren.
4. Starten: `npm run dev`

Der Lernfortschritt wird wie gewohnt lokal im Browser gespeichert.

> Hinweis: Die GitHub-Pages-Seite dieses Repos liefert `vokabeltrainer.html`
> weiterhin direkt aus — dieser Ordner ist nur für die Einbettung in React gedacht
> und ändert an der bestehenden App nichts.
