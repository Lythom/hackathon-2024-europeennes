import ArrowNo from "@/assets/arrow-no.svg";
import ArrowUnsure from "@/assets/arrow-unsure.svg";
import ArrowYes from "@/assets/arrow-yes.svg";
import { Button } from "@/components/ui/button.tsx";
import { Question } from "./MainContent";
import "./QuestionCard.css";

type QuestionCardProps = {
  question: Question;
  addAnswer: (answer: "y" | "n" | "u", index: number) => void;
  index: number;
};

const QuestionCard = ({ question, addAnswer, index }: QuestionCardProps) => {
  return (
    <div className="questionCard flex flex-col max-w-2xl backdrop-blur-md border border-slate-200/70 rounded-lg py-8 px-12 justify-between shadow-md gap-12">
      <h1 className="mt-3 text-3xl lg:text-4xl text-white font-bold text-left">
        {question.question}
      </h1>
      <div className="mt-5 flex flex-col justify-between items-center gap-2 sm:flex-row sm:gap-3">
        <div className="relative">
          {!index && (
            <div className="absolute top-[-110px] right-[30px]">
              <p className="font-bold text-2xl text-white relative left-[15px] top-[-10px]">
                NON
              </p>
              <img src={ArrowNo} alt="No" />
            </div>
          )}
          <Button
            onClick={() => addAnswer("n", index)}
            className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            👎
          </Button>
        </div>
        <div className="relative">
          {!index && (
            <div className="absolute top-[-110px] right-[-70px] w-40">
              <p className="font-bold text-2xl text-white relative left-[-45px] top-[-10px]">
                Je ne sais pas
              </p>
              <img src={ArrowUnsure} alt="Unsure" />
            </div>
          )}
          <Button
            variant="default"
            onClick={() => addAnswer("u", index)}
            className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            🤷‍♂️
          </Button>
        </div>
        <div className="relative">
          {!index && (
            <div className="absolute top-[-110px] right-[30px]">
              <p className="font-bold text-2xl text-white relative left-[-20px] top-[-10px]">
                OUI
              </p>
              <img src={ArrowYes} alt="Yes" />
            </div>
          )}
          <Button
            onClick={() => addAnswer("y", index)}
            className="w-32 h-32 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-5xl font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            👍
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
