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

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Icons:** Geen externe icon libraries (gebruikt tekst)
- **State Management:** React Hooks (useState, useEffect)
- **Data Persistence:** Browser localStorage API
- **Linting:** ESLint + typescript-eslint
- **Formatting:** Prettier
- **Git Hooks:** Husky + lint-staged + commitlint

## 🚀 Installatie

### Vereisten

- Node.js (versie 20.19 of hoger, of 22.12+)
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
- `npm run build` - Typecheck en bouw de app voor productie
- `npm run preview` - Preview de productie build lokaal
- `npm run lint` - Check code met ESLint
- `npm run lint:fix` - Fix automatisch oplosbare ESLint problemen
- `npm run format` - Formatteer de code met Prettier
- `npm run format:check` - Check of de code geformat is
- `npm run typecheck` - Typecheck met TypeScript

## 🧰 Dev Tooling

Het project bevat een volledige dev tooling setup:

- **ESLint** met typescript-eslint, react-hooks en react-refresh regels
- **Prettier** voor consistente code formatting
- **Husky** git hooks die automatisch draaien bij commits:
  - `pre-commit`: draait lint-staged (lint + format op staged bestanden)
  - `commit-msg`: valideert de commit message met commitlint
- **commitlint** die [Conventional Commits](https://www.conventionalcommits.org/) afdwingt (bv. `feat:`, `fix:`, `chore:`)
- **GitHub Actions** CI workflow die lint, format, typecheck en build draait bij elke push/PR

### Commit Conventies

Commit messages moeten het Conventional Commits formaat volgen:

```bash
git commit -m 'feat: add new feature'
git commit -m 'fix: correct counter reset behavior'
git commit -m 'chore: update dependencies'
```

Geldige types: `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`.

## 🎨 UI/UX Design

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
3. Commit je changes met een conventionele commit message (bv. `git commit -m 'feat: add amazing feature'`)
4. Push naar de branch (`git push origin feature/amazing-feature`)
5. Open een Pull Request (gebruik het PR template)

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
