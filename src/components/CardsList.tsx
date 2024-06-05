import { ListItemWeighted } from "@/App";
import "./CardsList.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const CardsList = ({ lists }: { lists: ListItemWeighted[] }) => {
  const sortedLists = lists.sort((a, b) => b.weight - a.weight);

  return (
    <div className="flex flex-wrap gap-6 p-12 justify-center">
      {sortedLists.map((item, idx) => (
        <Card key={item.name} className="max-w-md">
          <CardHeader>
            <CardTitle>
              {idx + 1}. {item.name}{" "}
            </CardTitle>
            <span className="float-end text-lg">
              Score d'affinité: {item.weight}
            </span>
          </CardHeader>
          <CardContent>
            <div
              className="synthesis"
              dangerouslySetInnerHTML={{ __html: item.synthesis }}
            />
          </CardContent>
          <CardFooter>
            <a
              href={`https://programme-candidats.interieur.gouv.fr/elections-europeennes-2024/detail-liste.html?liste=${item.manifesto_url_id}`}
            >
              Plus d'infos
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardsList;
