import ArrowNo from "@/assets/arrow-no.svg";
import ArrowUnsure from "@/assets/arrow-unsure.svg";
import ArrowYes from "@/assets/arrow-yes.svg";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { Question } from "./MainContent";
import "./QuestionCard.css";

type QuestionCardProps = {
  question: Question;
  addAnswer: (answer: "y" | "n" | "u", index: number) => void;
  index: number;
  currentAnswer?: "y" | "n" | "u";
};

const QuestionCard = ({
  question,
  addAnswer,
  index,
  currentAnswer
}: QuestionCardProps) => {
  const isNo = useMemo(() => currentAnswer === "n", [currentAnswer]);
  const isYes = useMemo(() => currentAnswer === "y", [currentAnswer]);
  const isUnsure = useMemo(() => currentAnswer === "u", [currentAnswer]);
  return (
    <div className="questionCard flex flex-col w-full lg:max-w-2xl border border-slate-200/70 rounded-lg pb-6 pt-4 px-6 md:py-8 md:px-12 justify-between shadow-md gap-12 backdrop-blur-sm">
      <h1 className="mt-3 text-2xl md:text-4xl text-white font-bold text-left">
        {question.question}
      </h1>
      <div className="mt-5 flex justify-between items-center gap-2 md:flex-row md:gap-3">
        <div className="relative">
          {!index && (
            <div className="absolute  right-[5px] top-[-55px] md:top-[-110px] md:right-[30px]">
              <p className="font-bold text-base md:text-2xl text-white relative left-[0px] top-[-5px] md:left-[15px] md:top-[-10px]">
                NON
              </p>
              <img src={ArrowNo} alt="No" className="h-6 md:h-auto" />
            </div>
          )}
          <Button
            onClick={() => addAnswer("n", index)}
            className={cn(
              "w-16 h-16 text-xl md:w-32 md:h-32 md:text-5xl py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-full border border-slate-200 md:hover:border-transparent bg-transparent text-gray-800 hover:bg-transparent hover:border-slate-200 md:hover:bg-[#D1ECFF] disabled:opacity-50 disabled:pointer-events-none",
              isNo && "bg-[#0061FF] border-4 border-[#003A99]"
            )}
          >
            👎
          </Button>
        </div>
        <div className="relative">
          {!index && (
            <div className="absolute top-[-55px] right-[-60px] md:top-[-110px] md:right-[-70px] md:w-40 w-30">
              <p className="font-bold text-base md:text-2xl text-white relative left-[-45px] top-[-5px] md:top-[-10px]">
                Je ne sais pas
              </p>
              <img src={ArrowUnsure} alt="Unsure" className="h-6 md:h-auto" />
            </div>
          )}
          <Button
            variant="default"
            onClick={() => addAnswer("u", index)}
            className={cn(
              "w-16 h-16 text-xl md:w-32 md:h-32 md:text-5xl py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-full border border-slate-200 md:hover:border-transparent bg-transparent text-gray-800 hover:bg-transparent hover:border-slate-200 md:hover:bg-[#D1ECFF] disabled:opacity-50 disabled:pointer-events-none",
              isUnsure && "bg-[#0061FF] border-4 border-[#003A99]"
            )}
          >
            🤷‍♂️
          </Button>
        </div>
        <div className="relative">
          {!index && (
            <div className="absolute top-[-70px] right-[10px] md:top-[-110px] md:right-[0px]">
              <p className="font-bold text-base md:text-2xl text-white relative left-[-20px] top-[-10px]">
                OUI
              </p>
              <img src={ArrowYes} alt="Yes" className="h-8 md:h-auto" />
            </div>
          )}
          <Button
            onClick={() => addAnswer("y", index)}
            className={cn(
              "w-16 h-16 text-xl md:w-32 md:h-32 md:text-5xl py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-full border border-slate-200 md:hover:border-transparent bg-transparent text-gray-800 hover:bg-transparent hover:border-slate-200 md:hover:bg-[#D1ECFF] disabled:opacity-50 disabled:pointer-events-none",
              isYes && "bg-[#0061FF] border-4 border-[#003A99]"
            )}
          >
            👍
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
