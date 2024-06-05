import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homePage flex flex-col mx-auto size-full p-12 gap-12">
      <div className="flex flex-col grow justify-center items-center gap-24">
        <div className="flex justify-center items-center max-w-4xl">
          <img src={Logo} />
        </div>
        <main className="flex flex-col gap-8 justify-center items-center">
          <p className="text-white text-2xl">
            Découvrez les listes qui sont en accord avec votre vision
          </p>
          <Button variant="default" onClick={() => navigate("/questions")}>
            Commencer le questionnaire
          </Button>
        </main>
      </div>
      <footer className="mt-md text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400">
            Réalisé lors du hackathon Lonestone 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
