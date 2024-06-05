import CardsList from "./CardsList";
import { ListItemWeighted } from "./MainContent";

type ResultsContainerProps = {
  lists: ListItemWeighted[];
};

const ResultsContainer = ({ lists }: ResultsContainerProps) => {
  return (
    <div className="flex flex-col gap-4 p-12">
      <div className="text-3xl text-white font-bold">Résultat</div>
      <div className="italic text-md text-white font-semibold">
        Voici les listes avec lesquelles vous semblez avoir le plus d'affinité.
      </div>
      <CardsList lists={lists} />
    </div>
  );
};

export default ResultsContainer;
