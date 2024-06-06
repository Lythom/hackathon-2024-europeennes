import "./CardsList.css";
import { ListItemWeighted } from "./MainContent";
import { Arrow } from "./icons/arrow";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";

const CardsList = ({ lists }: { lists: ListItemWeighted[] }) => {
  const sortedLists = lists.sort((a, b) => b.weight - a.weight);

  return (
    <div className="mx-auto">
      {sortedLists.map((item) => (
        <Card key={item.name}>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
              <CardTitle>{item.name}</CardTitle>
              <span className="text-sm md:text-lg text-left md:text-right whitespace-nowrap">
                Score d'affinité: <b>{item.weight}</b>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className="synthesis"
              dangerouslySetInnerHTML={{ __html: item.synthesis }}
            />
          </CardContent>
          <CardFooter>
            <a
              className="hidden md:block text-sm font-semibold text-blue-700 hover:underline"
              href={`https://programme-candidats.interieur.gouv.fr/elections-europeennes-2024/detail-liste.html?liste=${item.manifesto_url_id}`}
            >
              Profession de foi
            </a>
            <a
              href={item.list_website}
              className="text-sm text-blue-700 font-semibold flex gap-2 items-center hover:underline"
            >
              Programme complet <Arrow />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardsList;
