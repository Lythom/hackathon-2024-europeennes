import CardsList from "./CardsList";
import { ListItemWeighted } from "./MainContent";

type ResultsContainerProps = {
  lists: ListItemWeighted[];
};

const ResultsContainer = ({ lists }: ResultsContainerProps) => {
  return (
    <div className="questionCard max-w-2xl backdrop-blur-md border border-slate-200/70 rounded-lg py-8 px-12 justify-center items-center shadow-md gap-12 max-h-96 overflow-y-auto">
      <CardsList lists={lists} />
    </div>
  );
};

export default ResultsContainer;
