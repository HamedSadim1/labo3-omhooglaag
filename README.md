# Teller App

Een moderne, interactieve counter applicatie gebouwd met React, TypeScript en Tailwind CSS. De app toont vier onafhankelijke tellers met aanpasbare stapgroottes, een realtime totaal met mijlpaal-viering en persistentie via localStorage.

![Teller App Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Teller+App+Preview)

## ✨ Features

- **Vier onafhankelijke tellers** met unieke identificatie
- **Aanpasbare stapgroottes** via presets (1, 5, 10, 25) én een slider
- **Hold-to-repeat:** ingedrukt houden van +/− herhaalt de stap automatisch
- **Realtime totaal** met **doelvoortgangsbalk** en mijlpaal-indicator
- **Feest bij elke 100 punten:** confetti + melding "🎉 X bereikt — goed gedaan!"
- **Persistentie** via localStorage — waarden blijven behouden bij herladen
- **Reset functionaliteit** voor individuele tellers en alle tellers tegelijk
- **Toegankelijkheid:** schermlezer-aankondigingen (`role="status"`, `aria-atomic`, `aria-pressed`) en ondersteuning voor `prefers-reduced-motion`
- **Responsive design** dat werkt op desktop, tablet en mobiel
- **TypeScript** voor type veiligheid
- **Moderne build tooling** met Vite voor snelle development

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Class merging:** clsx + tailwind-merge (`cn`-helper)
- **Build Tool:** Vite
- **Icons:** Geen externe icon libraries (gebruikt tekst)
- **State Management:** React Context + custom hooks
- **Data Persistence:** Browser localStorage API
- **Linting:** ESLint + typescript-eslint (incl. `@/`-alias en `no-restricted-imports` regels)
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

- **Increment:** Klik op de blauwe "+" knop om de teller te verhogen
- **Decrement:** Klik op de rode "−" knop om de teller te verlagen
- **Hold-to-repeat:** Houd + of − ingedrukt om de stap snel te herhalen
- **Reset:** Klik op de grijze "Reset" knop om een teller naar 0 te zetten
- **Stapgrootte:** Kies een preset (1, 5, 10, 25) of gebruik de slider (1–25, standaard: 1)

### Geavanceerde Features

- **Persistentie:** Tellerwaarden en stapgroottes worden automatisch opgeslagen in localStorage
- **Totaal:** Het donkere totaalpaneel toont de som van alle vier tellers
- **Doelvoortgang:** De voortgangsbalk toont de vooruitgang naar de volgende mijlpaal
- **Feest:** Bij elke 100 punten verschijnt confetti en een felicitatiemelding
- **Reset All:** Gebruik de "Alles resetten" knop in het totaalgedeelte om alle tellers te resetten

## 📁 Project Structuur

```bash
src/
├── components/
│   ├── Confetti.tsx        # Confetti-viering (respecteert prefers-reduced-motion)
│   ├── Counter.tsx         # Hoofd teller component
│   ├── CounterButton.tsx   # Herbruikbare knop met hold-to-repeat
│   ├── CounterDisplay.tsx  # Display component voor tellerwaarde
│   ├── CounterGrid.tsx     # Grid layout voor alle tellers
│   ├── GoalMessage.tsx     # Felicitatiemelding bij een mijlpaal
│   ├── GoalProgress.tsx    # Voortgangsbalk naar de volgende mijlpaal
│   ├── StatValue.tsx       # Gedeeld getal-display met sr-only prefix
│   ├── StepInput.tsx       # Stapgrootte presets + slider
│   └── Total.tsx           # Totaal paneel met viering en reset
├── context/
│   ├── CounterProvider.tsx # Context-provider met state + persistentie
│   ├── counterContext.ts   # Context-definitie en types
│   └── useCounter.ts       # Hook om de context te consumeren
├── hooks/
│   ├── useGoalCelebration.ts  # Mijlpaal-vieringslogica
│   ├── useHoldRepeat.ts       # Hold-to-repeat logica
│   └── usePersistedValues.ts  # Changed-only persistente state
├── utils/
│   ├── cn.ts              # clsx + tailwind-merge helper
│   ├── confetti.ts        # Confetti-configuratie en generatie
│   ├── goal.ts            # Mijlpaal-berekeningen
│   ├── index.ts           # Barrel export van alle utils
│   ├── localStorage.ts    # Data persistentie (storage keys)
│   ├── math.ts            # clamp helper
│   ├── steps.ts           # Stap-validatie (clampStep)
│   └── values.ts          # buildValueMap helper
├── App.tsx                # Hoofd applicatie component
├── constants.ts           # Single Source of Truth voor alle constanten
├── main.tsx               # Applicatie entry point
└── index.css              # Globale styles met Tailwind
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
- **Import-conventie:** gebruik de `@/` alias (`@/components/Counter`) in plaats van relatieve `../` imports — de `no-restricted-imports` regel (met het patroon `../**`) dwingt dit af
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

De app gebruikt een moderne, strakke Tailwind-stijl:

- **Witte tellerkaarten** met afgeronde hoeken en subtiele schaduwen
- **Donker gradient totaalpaneel** met gele voortgangsbalk en mijlpaal-aanduiding
- **Smooth micro-interacties:** hover-states, actieve-schaal (press feedback) en kleurtransities
- **Kleurcodering** voor verschillende states (rood voor negatief, grijs voor nul)
- **Confetti-animatie** bij het behalen van een mijlpaal (uitgeschakeld bij `prefers-reduced-motion`)
- **Responsive grid layout** (1 kolom mobiel → 2 tablet → 4 desktop) met vloeiende getal-typografie zodat grote waarden nooit overlopen

## 🔧 Development

### Code Stijl

- **DRY Principle:** Herhalende code vermeden door herbruikbare componenten en helpers
- **Component Composition:** Kleine, gefocuste componenten die samenwerken
- **Single Source of Truth:** Alle constante waarden leven in `src/constants.ts`
- **Gecentraliseerde utils:** Helperfuncties in logisch opgedeelde modules onder `src/utils/`, ontsloten via de barrel
- **TypeScript:** Sterke typing voor betere developer experience
- **Modulaire architectuur:** Gescheiden verantwoordelijkheden (UI, logica, data)

### Best Practices

- Custom hooks voor herbruikbare logica (`useHoldRepeat`, `useGoalCelebration`, `usePersistedValues`)
- Functional components met TypeScript interfaces
- Utility functies voor herbruikbare logica
- `cn()` voor het samenvoegen van conditionele Tailwind classes
- Imports via de `@/` alias (geen relatieve `../` imports)
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
- [clsx](https://github.com/lukeed/clsx) - Conditionele class names
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Conflict-vrije Tailwind class merging

---

Gebouwd als onderdeel van Webframeworks labo 3 - AP Hogeschool
