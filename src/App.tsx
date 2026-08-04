import CounterGrid from "@/components/CounterGrid";
import { cn } from "@/utils";

function App() {
  return (
    <div className={cn("min-h-screen bg-gray-50 text-gray-900")}>
      <main
        className={cn("flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16")}
      >
        <header className={cn("text-center mb-10 sm:mb-14 max-w-2xl")}>
          <p
            className={cn(
              "text-xs font-semibold text-blue-500 uppercase tracking-widest mb-3"
            )}
          >
            Interactieve tellers
          </p>
          <h1
            className={cn(
              "text-4xl sm:text-5xl font-semibold tracking-tight mb-3"
            )}
          >
            Teller App
          </h1>
          <p className={cn("text-gray-500 text-lg leading-relaxed")}>
            Vier onafhankelijke tellers met aanpasbare stapgrootte. Waarden
            worden automatisch opgeslagen in je browser.
          </p>
        </header>

        <CounterGrid />
      </main>
    </div>
  );
}

export default App;
