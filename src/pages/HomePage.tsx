import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo-blue.png";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homePage flex flex-col mx-auto size-full p-8 md:p-12 gap-12">
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
        <p className="text-xs md:text-sm text-white/60">
          Made with ❤️ by Lonestone - Hackathon 24
          <br />
          Samuel Bouchet - Alexandre Delaunay - Adeline Hamon
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
