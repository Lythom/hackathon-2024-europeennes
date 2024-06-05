import { Button } from "@/components/ui/button.tsx";

type ProgressContainerProps = {
  started: boolean;
  setStarted: (value: boolean) => void;
  stepsCount: number;
  currentStep: number;
  goNext: () => void;
  goPrev: () => void;
  goNextDisabled: boolean;
};

const ProgressContainer = ({
  started,
  setStarted,
  stepsCount,
  currentStep,
  goNext,
  goPrev,
  goNextDisabled,
}: ProgressContainerProps) => {
  const progress = (currentStep / stepsCount) * 100;
  return (
    <div className="flex flex-col bg-white p-12 rounded-md w-80 gap-6">
      <p className="mt-3 text-lg text-gray-800">
        Répondez à ces questions avec précision,
        <br />
        pour découvrir les listes qui sont en accord avec votre vision
      </p>
      {started && (
        <div className="flex flex-col gap-3">
          <div className="relative">
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
          <div className="flex justify-between">
            <Button
              variant="destructive"
              onClick={goPrev}
              disabled={currentStep === 1}
            >
              Précédent
            </Button>
            <Button
              variant="destructive"
              onClick={goNext}
              disabled={goNextDisabled}
            >
              Suivant
            </Button>
          </div>
        </div>
      )}
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        {!started && (
          <Button
            onClick={() => setStarted(true)}
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-slate-200 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            Démarrer !
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProgressContainer;
