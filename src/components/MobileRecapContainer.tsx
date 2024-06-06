import { Button } from "@/components/ui/button.tsx";
import { ShareButton } from "./ShareButton";

type MobileRecapContainerProps = {
  restartQuizz: () => void;
};

const MobileRecapContainer = ({ restartQuizz }: MobileRecapContainerProps) => {
  return (
    <div className="md:hidden flex flex-col w-full bg-white p-8 rounded-lg shadow-md gap-8 text-left">
      <div className="flex flex-col justify-center items-center gap-6 sm:flex-row sm:gap-3">
        <Button
          onClick={restartQuizz}
          className="cta-button w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-sm border-0 border-transparent bg-slate-200 text-gray-800 hover:bg-slate-100 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none"
        >
          Recommencer
        </Button>
        <p className="text-base text-gray-700">
          Partagez le questionnaire à votre entourage. Rassurez-vous, vous
          pouvez choisir de partager ou non votre résultat. Nous ne conservons
          aucune donnée.
        </p>
        <ShareButton className="cta-outline-button w-full" />
      </div>
      <div className="flex-col gap-2 flex">
        <a
          href="https://lonestone.io"
          className="text-sm text-center text-slate-800 font-semibold underline"
        >
          En savoir plus sur Lonestone
        </a>
      </div>
    </div>
  );
};

export default MobileRecapContainer;
