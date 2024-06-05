import { Button } from "@/components/ui/button.tsx";
import { Question } from "./MainContent";

type QuestionCardProps = {
  question: Question;
  addAnswer: (answer: "yes" | "no" | "unsure", index: number) => void;
  index: number;
};

const QuestionCard = ({ question, addAnswer, index }: QuestionCardProps) => {
  return (
    <div className="flex flex-col w-3/4 bg-blue-600/80 backdrop-blur-md rounded-md p-6 max-w-sm justify-between">
      <p className="mt-3 text-xl text-white font-bold">{question.question}</p>
      <div className="mt-5 flex flex-col justify-between items-center gap-2 sm:flex-row sm:gap-3">
        <Button
          onClick={() => addAnswer("no", index)}
          className="w-16 h-16 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-2xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
        >
          👎
        </Button>
        <Button
          variant="default"
          onClick={() => addAnswer("unsure", index)}
          className="w-16 h-16 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-2xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
        >
          🤷‍♂️
        </Button>
        <Button
          onClick={() => addAnswer("yes", index)}
          className="w-16 h-16 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-2xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
        >
          👍
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;
