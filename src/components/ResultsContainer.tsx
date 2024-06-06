import CardsList from "./CardsList";
import { ListItemWeighted } from "./MainContent";
import "./ResultContainer.css";

type ResultsContainerProps = {
  lists: ListItemWeighted[];
};

const ResultsContainer = ({ lists }: ResultsContainerProps) => {
  return (
    <div className="resultContainer backdrop-blur-sm w-full lg:max-w-2xl border border-slate-200/70 rounded-lg py-4 px-4 md:px-16 md:py-16 justify-center items-center shadow-md gap-12 md:overflow-y-auto">
      <CardsList lists={lists} />
    </div>
  );
};

export default ResultsContainer;
