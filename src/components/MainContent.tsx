import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import lists from "../data/lists.json";
import questions from "../data/questions.json";
import ProgressContainer from "./ProgressContainer";
import QuestionCard from "./QuestionCard";
import ResultsContainer from "./ResultsContainer";

export type ListItem = {
  id: number;
  name: string;
  manifesto_url_id: string;
  synthesis: string;
};

export type ListItemWeighted = ListItem & {
  weight: number;
};

export type Question = {
  question: string;
  yes: number[];
  no: number[];
};

function MainContent() {
  const [resultsVisible, setResultsVisible] = useState(false);
  const [answers, setAnswers] = useState<Array<"y" | "n" | "u">>([]);
  const listsArray = useMemo(() => lists as ListItem[], []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const goNext = () => setStep((prev) => prev + 1);
  const goPrev = () => setStep((prev) => prev - 1);
  const goNextDisabled = useMemo(
    () => step === answers.length + 1 || step === questions.length,
    [answers.length, step]
  );

  // Function to update the URL with the current answers
  const updateURL = useCallback(
    (answers: Array<"y" | "n" | "u">) => {
      setSearchParams({ answers: answers.join("") });
    },
    [setSearchParams]
  );

  // Function to add an answer and update the URL
  const addAnswer = useCallback(
    (a: "y" | "n" | "u", index: number) => {
      const newAnswers = [...answers];
      newAnswers[index] = a;
      setAnswers(newAnswers);
      updateURL(newAnswers);
      if (questions.length === newAnswers.length) {
        setResultsVisible(true);
      } else {
        setStep(step + 1);
      }
    },
    [answers, step, updateURL]
  );

  // Read answers from URL on initial load
  useEffect(() => {
    const answersFromURL = searchParams.get("answers");
    if (answersFromURL) {
      if (!answers.length) {
        const parsedAnswers = answersFromURL.split("") as Array<
          "y" | "n" | "u"
        >;
        setAnswers(parsedAnswers);
        if (parsedAnswers.length === questions.length) {
          setResultsVisible(true);
          setStep(parsedAnswers.length);
        } else {
          setResultsVisible(false);
          setStep(parsedAnswers.length + 1);
        }
      }
    } else {
      setStep(1);
    }
  }, [searchParams, answers]);

  const stepQuestion: Question | null = useMemo(
    () => questions[step - 1],
    [step]
  );

  // Calculate and add the weight for each list
  const listsWeights = useMemo(() => {
    const listsWithWeights = listsArray.map((list) => ({ ...list, weight: 0 }));
    for (let i = 0; i < answers.length; i++) {
      const currentAnswer = answers[i];
      const currentQuestion = questions[i];
      const matchesIds =
        currentAnswer === "y"
          ? currentQuestion.yes
          : currentAnswer === "n"
          ? currentQuestion.no
          : [];
      for (const matchId of matchesIds) {
        const currentList = listsWithWeights.find(
          (list) => list.id === matchId
        );
        if (currentList) {
          currentList.weight++;
        }
      }
      const unmatchesIds =
        currentAnswer === "y"
          ? currentQuestion.no
          : currentAnswer === "n"
          ? currentQuestion.yes
          : [];
      for (const unmatchId of unmatchesIds) {
        const currentList = listsWithWeights.find(
          (list) => list.id === unmatchId
        );
        if (currentList) {
          currentList.weight--;
        }
      }
    }
    return listsWithWeights;
  }, [answers, listsArray]);

  const restartQuizz = () => {
    setAnswers([]);
    setResultsVisible(false);
    setStep(0);
    setSearchParams({});
  };

  return (
    <div className="flex gap-8 m-auto items-start">
      <div className="flex flex-col gap-8">
        <ProgressContainer
          currentStep={step}
          stepsCount={questions.length}
          goNext={goNext}
          goPrev={goPrev}
          goNextDisabled={goNextDisabled}
          answersCount={answers.length}
          setResultsVisible={setResultsVisible}
          resultsVisible={resultsVisible}
          restartQuizz={restartQuizz}
        />
        <div className="text-center  w-96">
          <p className="text-xs text-gray-700">
            Made with ❤️ by Lonestone - Hackathon 24
            <br />
            Samuel Bouchet - Alexandre Delaunay - Adeline Hamon
          </p>
        </div>
      </div>
      {resultsVisible ? (
        <ResultsContainer lists={listsWeights} />
      ) : (
        stepQuestion && (
          <QuestionCard
            question={stepQuestion}
            addAnswer={addAnswer}
            index={step - 1}
          />
        )
      )}
    </div>
  );
}

export default MainContent;
