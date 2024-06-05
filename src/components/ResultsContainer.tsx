import CardsList from "./CardsList";
import { ListItemWeighted } from "./MainContent";

type ResultsContainerProps = {
  lists: ListItemWeighted[];
};

const ResultsContainer = ({ lists }: ResultsContainerProps) => {
  return (
    <div className="questionCard w-full lg:max-w-2xl backdrop-blur-md border border-slate-200/70 rounded-lg py-4 px-4 md:py-8 md:px-12 justify-center items-center shadow-md gap-12 md:max-h-96 md:overflow-y-auto">
      <CardsList lists={lists} />
    </div>
  );
};

export default ResultsContainer;
