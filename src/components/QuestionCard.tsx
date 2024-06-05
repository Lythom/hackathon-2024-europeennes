import { Button } from "@/components/ui/button.tsx";
import { Question } from "./MainContent";
import "./QuestionCard.css";

type QuestionCardProps = {
  question?: Question;
  addAnswer: (answer: "y" | "n" | "u", index: number) => void;
  index: number;
  setStarted: (value: boolean) => void;
};

const QuestionCard = ({
  question,
  addAnswer,
  index,
  setStarted,
}: QuestionCardProps) => {
  return (
    <div className="questionCard flex flex-col max-w-2xl backdrop-blur-md border border-slate-200/70 rounded-lg py-8 px-12 justify-between shadow-md gap-12">
      {question ? (
        <>
          <h1 className="mt-3 text-3xl lg:text-4xl text-white font-bold text-left">
            {question.question}
          </h1>
          <div className="mt-5 flex flex-col justify-between items-center gap-2 sm:flex-row sm:gap-3">
            <Button
              onClick={() => addAnswer("n", index)}
              className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
            >
              👎
            </Button>
            <Button
              variant="default"
              onClick={() => addAnswer("u", index)}
              className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
            >
              🤷‍♂️
            </Button>
            <Button
              onClick={() => addAnswer("y", index)}
              className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
            >
              👍
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="text-left">
            <h1 className="mt-3 text-3xl lg:text-5xl text-white font-bold text-left">
              Commençons dès que vous êtes prêt.
            </h1>
            <p className="text-white mt-2">
              Pour chaque question, répondez par NON, Je ne sais pas ou OUI.
            </p>
          </div>
          <div className="mt-5 flex flex-col justify-between items-center gap-2 sm:flex-row sm:gap-3">
            <Button className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none">
              👎
            </Button>
            <Button
              variant="default"
              className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
            >
              🤷‍♂️
            </Button>
            <Button
              onClick={() => setStarted(true)}
              className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
            >
              👍
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionCard;
