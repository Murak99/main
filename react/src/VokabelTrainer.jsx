// Bindet den vorhandenen Vokabeltrainer (vokabeltrainer.html) unverändert
// als React-Komponente ein – Farben, Design, Quiz und Umdreh-Karten bleiben 1:1 erhalten.
//
// Voraussetzung: vokabeltrainer.html liegt im public/-Ordner der React-App
// (wird dann unter /vokabeltrainer.html ausgeliefert).
export default function VokabelTrainer({ src = "/vokabeltrainer.html" }) {
  return (
    <iframe
      src={src}
      title="Englisch-Vokabeltrainer"
      style={{
        border: "none",
        display: "block",
        width: "100%",
        height: "100vh",
        background: "#181a1f", // gleiche Grundfarbe wie der Trainer – kein Aufblitzen beim Laden
      }}
    />
  );
}
