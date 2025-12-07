# Counter App

Een moderne, interactieve counter applicatie gebouwd met React, TypeScript en Tailwind CSS. Deze app toont vier onafhankelijke counters met glasmorfisme UI-effecten, aanpasbare stapgroottes en persistentie via localStorage.

![Counter App Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Counter+App+Preview)

## ✨ Features

- **Vier onafhankelijke counters** met unieke identificatie
- **Aanpasbare stapgroottes** voor elke counter
- **Glasmorfisme UI** met moderne visuele effecten
- **Persistentie** via localStorage - waarden blijven behouden bij herladen
- **Realtime totaal** van alle counters
- **Reset functionaliteit** voor individuele counters en alle counters tegelijk
- **Responsive design** dat werkt op desktop, tablet en mobiel
- **TypeScript** voor type veiligheid
- **Moderne build tooling** met Vite voor snelle development

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Icons:** Geen externe icon libraries (gebruikt tekst)
- **State Management:** React Hooks (useState, useEffect)
- **Data Persistence:** Browser localStorage API

## 🚀 Installatie

### Vereisten

- Node.js (versie 16 of hoger)
- npm of yarn

### Stappen

1. **Clone de repository**

   ```bash
   git clone https://github.com/HamedSadim1/labo3-omhooglaag.git
   cd labo3-omhooglaag
   ```

2. **Installeer dependencies**

   ```bash
   npm install
   ```

3. **Start de development server**

   ```bash
   npm run dev
   ```

4. **Open je browser**
   Ga naar [http://localhost:5173](http://localhost:5173) om de app te bekijken.

## 📖 Gebruik

### Basis Functionaliteit

- **Increment:** Klik op de blauwe "+" knop om de counter te verhogen
- **Decrement:** Klik op de rode "-" knop om de counter te verlagen
- **Reset:** Klik op de grijze "Reset" knop om een counter naar 0 te zetten
- **Stapgrootte:** Gebruik het input veld om de stapgrootte aan te passen (standaard: 1)

### Geavanceerde Features

- **Persistentie:** Counter waarden worden automatisch opgeslagen in localStorage
- **Totaal:** Het gele totaal toont de som van alle vier counters
- **Reset All:** Gebruik de "Reset All" knop in het totaal gedeelte om alle counters te resetten

## 📁 Project Structuur

```bash
src/
├── components/
│   ├── Counter.tsx          # Hoofd counter component
│   ├── CounterButton.tsx    # Herbruikbare knop component
│   ├── CounterDisplay.tsx   # Display component voor counter waarde
│   ├── CounterGrid.tsx      # Grid layout voor alle counters
│   ├── StepInput.tsx        # Input component voor stapgrootte
│   └── Total.tsx            # Totaal component
├── utils/
│   └── localStorage.ts      # Utility functies voor data persistentie
├── App.tsx                  # Hoofd applicatie component
├── main.tsx                 # Applicatie entry point
└── index.css                # Globale styles met Tailwind
```

## 🏃‍♂️ Scripts

- `npm run dev` - Start de development server
- `npm run build` - Bouw de app voor productie
- `npm run preview` - Preview de productie build lokaal

## 🎨 UI/UX Design

De app gebruikt moderne glasmorfisme effecten:

- **Transparante achtergronden** met blur effecten
- **Subtiele schaduwen** voor diepte
- **Smooth animaties** bij interacties
- **Kleurcodering** voor verschillende states (rood voor negatief, groen voor positief, grijs voor nul)
- **Responsive grid layout** die zich aanpast aan schermgrootte

## 🔧 Development

### Code Stijl

- **DRY Principle:** Herhalende code vermeden door herbruikbare componenten
- **Component Composition:** Kleine, gefocuste componenten die samenwerken
- **TypeScript:** Sterke typing voor betere developer experience
- **Modulaire architectuur:** Gescheiden verantwoordelijkheden (UI, logica, data)

### Best Practices

- Hooks gebruikt voor state management
- Functional components met TypeScript interfaces
- Utility functies voor herbruikbare logica
- CSS-in-JS vermeden door Tailwind classes

## 🤝 Bijdragen

Bijdragen zijn welkom! Volg deze stappen:

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/amazing-feature`)
3. Commit je changes (`git commit -m 'Add amazing feature'`)
4. Push naar de branch (`git push origin feature/amazing-feature`)
5. Open een Pull Request

## 📄 Licentie

Dit project is gelicentieerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 👨‍💻 Auteur

**Hamed Sadim** - [GitHub](https://github.com/HamedSadim1)

## 🙏 Erkenningen

- [React](https://reactjs.org/) - De JavaScript library voor building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

---

Gebouwd als onderdeel van Webframeworks labo 3 - AP Hogeschool
