import Arrow from "@/assets/arrow.svg";
import { Button } from "@/components/ui/button.tsx";

type ProgressContainerProps = {
  started: boolean;
  setStarted: (value: boolean) => void;
  stepsCount: number;
  currentStep: number;
  goNext: () => void;
  goPrev: () => void;
  goNextDisabled: boolean;
  answersCount: number;
  setResultsVisible: (value: boolean) => void;
  resultsVisible: boolean;
  restartQuizz: () => void;
};

const ProgressContainer = ({
  started,
  setStarted,
  stepsCount,
  currentStep,
  goNext,
  goPrev,
  goNextDisabled,
  answersCount,
  setResultsVisible,
  resultsVisible,
  restartQuizz,
}: ProgressContainerProps) => {
  const progress = (currentStep / stepsCount) * 100;
  return (
    <div className="flex flex-col grow bg-white pb-8 pt-24 px-8 rounded-lg shadow-md w-96 gap-8 text-left">
      <div>
        <p className="text-xl text-gray-800">
          Répondez à l'intégralité des questions pour découvrir les listes qui
          sont en accord avec vos réponses
        </p>
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
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          {!started ? (
            <Button
              onClick={() => setStarted(true)}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-slate-200 text-gray-800 hover:bg-slate-100 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none"
            >
              C'est parti
            </Button>
          ) : !resultsVisible ? (
            <Button
              onClick={() => setResultsVisible(true)}
              disabled={answersCount !== stepsCount}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-slate-200 text-gray-800 hover:bg-slate-100 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none"
            >
              Obtenir mon résultat
            </Button>
          ) : (
            <Button
              onClick={restartQuizz}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-slate-200 text-gray-800 hover:bg-slate-100 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none"
            >
              Recommencer
            </Button>
          )}
        </div>
      </div>
      <a
        href="https://lonestone.io"
        className="text-sm text-center text-slate-800 font-semibold underline"
      >
        En savoir plus sur Lonestone
      </a>
    </div>
  );
};

export default ProgressContainer;
