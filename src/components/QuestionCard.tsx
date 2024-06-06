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
    <div className="questionCard flex flex-col w-full lg:max-w-2xl border border-slate-200/70 rounded-lg pt-4 py-8 px-6 md:py-8 md:px-12 justify-between shadow-md gap-12 backdrop-blur-sm">
      <h1 className="mt-3 text-2xl md:text-4xl text-white font-bold text-left">
        {question.question}
      </h1>
      <div className="mt-5 flex justify-between items-center gap-2 md:flex-row md:gap-3">
        <div className="relative">
          {!index && (
            <div className="absolute top-[-110px] md:right-[30px] right-[5px] hidden md:block">
              <p className="font-bold text-xl md:text-2xl text-white relative left-[15px] top-[-10px]">
                NON
              </p>
              <img src={ArrowNo} alt="No" />
            </div>
          )}
          <Button
            onClick={() => addAnswer("n", index)}
            className="w-16 h-16 text-xl md:w-32 md:h-32 md:text-5xl py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            👎
          </Button>
        </div>
        <div className="relative">
          {!index && (
            <div className="absolute top-[-110px] right-[-70px] md:w-40 w-30 hidden md:block">
              <p className="font-bold text-xl md:text-2xl text-white relative left-[-45px] top-[-10px]">
                Je ne sais pas
              </p>
              <img src={ArrowUnsure} alt="Unsure" />
            </div>
          )}
          <Button
            variant="default"
            onClick={() => addAnswer("u", index)}
            className="w-16 h-16 text-xl md:w-32 md:h-32 md:text-5xl py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            🤷‍♂️
          </Button>
        </div>
        <div className="relative">
          {!index && (
            <div className="absolute top-[-110px] right-[0px] hidden md:block">
              <p className="font-bold text-xl md:text-2xl text-white relative left-[-20px] top-[-10px]">
                OUI
              </p>
              <img src={ArrowYes} alt="Yes" />
            </div>
          )}
          <Button
            onClick={() => addAnswer("y", index)}
            className="w-16 h-16 text-xl md:w-32 md:h-32 md:text-5xl py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-full border border-white bg-transparent text-gray-800 hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
          >
            👍
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
