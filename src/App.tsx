import "./App.css";
import MainContent from "./components/MainContent";

export type ListItem = {
  id: number;
  name: string;
  manifesto_url_id: string;
  synthesis: string;
};

export type ListItemWeighted = ListItem & {
  weight: number;
};

function App() {
  return (
    <>
      <div className="flex flex-col mx-auto size-full">
        <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
          <nav
            className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <a
                className="flex-none text-xl font-semibold text-black focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="/"
                aria-label="Brand"
              >
                Mon europe 2024
              </a>
            </div>
          </nav>
        </header>
        <MainContent />
        <footer className="mt-auto text-center py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-400">
              Réalisé lors du hackathon Lonestone 2024
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
