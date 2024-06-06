import Arrow from "@/assets/arrow.svg";
import { Button } from "@/components/ui/button.tsx";
import { ShareButton } from "./ShareButton";
import { Info } from "./icons/info";

type ProgressContainerProps = {
  stepsCount: number;
  currentStep: number;
  goNext: () => void;
  goPrev: () => void;
  goNextDisabled: boolean;
  resultsVisible: boolean;
  restartQuizz: () => void;
};

const ProgressContainer = ({
  stepsCount,
  currentStep,
  goNext,
  goPrev,
  goNextDisabled,
  resultsVisible,
  restartQuizz
}: ProgressContainerProps) => {
  const progress = (currentStep / stepsCount) * 100;
  return (
    <div className="flex flex-col lg:w-96 w-full bg-white pb-8 pt-8 lg:pt-8 px-8 rounded-lg shadow-md gap-8 text-left">
      <div>
        {!resultsVisible && (
          <p className="text-xl text-gray-700 md:pt-12 pb-4">
            Répondez à l'intégralité des questions pour découvrir les listes qui
            sont en accord avec vos réponses
          </p>
        )}
        {resultsVisible && (
          <p className="text-xl text-gray-700 md:pb-8">
            <div className="text-3xl font-bold pb-4">Résultat</div>
            <p className="text-base md:text-xl">
              Voici les listes avec lesquelles vous semblez avoir le plus
              d’affinité.
            </p>
          </p>
        )}
        {!resultsVisible && (
          <div className="flex flex-col gap-3 py-5 px-4 rounded-md shadow-sm">
            <div className="flex gap-4">
              <div className="relative flex justify-center">
                <div
                  className="radial-progress text-blue-100 absolute"
                  style={{ "--value": 100 } as React.CSSProperties}
                  role="progressbar"
                ></div>
                <div
                  className="radial-progress text-blue-600"
                  style={{ "--value": progress } as React.CSSProperties}
                  role="progressbar"
                >
                  <div className="flex flex-row justify-center items-center gap-2">
                    {`${currentStep}/${stepsCount}`}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-md text-blue-700 font-bold mb-0">
                  Délibération
                </h3>
                <p className="text-sm text-slate-700">
                  Vous pouvez revenir en arrière à tout moment pour modifier vos
                  réponses.
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button
                variant="ghost"
                className="w-2/4 py-1 px-2"
                onClick={goPrev}
                disabled={
                  currentStep === 1 || currentStep === 0 || resultsVisible
                }
              >
                <img src={Arrow} className="rotate-180 mr-2" /> Précédent
              </Button>
              <Button
                variant="ghost"
                className="w-2/4"
                onClick={goNext}
                disabled={goNextDisabled || currentStep === 0 || resultsVisible}
              >
                Suivant <img src={Arrow} className="ml-2" />
              </Button>
            </div>
          </div>
        )}
        {resultsVisible && (
          <div className="hidden md:block flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Button
              onClick={restartQuizz}
              className="cta-button w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-sm border-0 border-transparent bg-slate-200 text-gray-800 hover:bg-slate-100 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none"
            >
              Recommencer
            </Button>
            <div className="block md:hidden">
              <ShareButton />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 items-center">
        <a
          href="https://lonestone.io"
          className="hidden md:block text-sm text-center text-slate-800 font-semibold underline"
        >
          En savoir plus sur Lonestone
        </a>
        <a
          href="https://github.com/lonestone/hackathon-2024-europeennes/tree/main#readme"
          className="flex items-center gap-2 text-sm text-center text-neutral-500 italic hover:underline"
        >
          <Info /> Comment a été créé ce questionnaire ?
        </a>
      </div>
    </div>
  );
};

export default ProgressContainer;
