import MainContent from "@/components/MainContent";
import Logo from "../assets/logo-small.png";

const QuestionsPage = () => {
  return (
    <div className="flex flex-col mx-auto size-full bg-[url('./assets/background.jpg')] bg-cover p-12">
      <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <nav
          className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex w-full items-center justify-center max-w-md mx-auto">
            <img src={Logo} />
          </div>
        </nav>
      </header>
      <MainContent />
    </div>
  );
};

export default QuestionsPage;
