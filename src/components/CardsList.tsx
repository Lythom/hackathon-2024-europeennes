import Arrow from "@/assets/arrow.svg";
import "./CardsList.css";
import { ListItemWeighted } from "./MainContent";
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
    <div className="mx-auto">
      {sortedLists.map((item) => (
        <Card key={item.name}>
          <CardHeader>
            <div className="flex justify-between items-center w-full gap-2">
              <CardTitle>{item.name}</CardTitle>
              <span className="float-end text-sm md:text-lg text-right font-bold">
                Score d'affinité: {item.weight}
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
              className="hidden md:block text-sm font-semibold text-gray-700 hover:underline"
              href={`https://programme-candidats.interieur.gouv.fr/elections-europeennes-2024/detail-liste.html?liste=${item.manifesto_url_id}`}
            >
              Profession de foi
            </a>
            <a
              href={item.list_website}
              className="text-sm font-semibold flex gap-2 items-center text-gray-700 hover:underline"
            >
              Programme complet <img src={Arrow} />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardsList;
