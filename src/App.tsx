import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";

export type ListItem = {
  id: number;
  name: string;
  manifesto_url_id: string;
  synthesis: string;
};

export type ListItemWeighted = ListItem & {
  weight: number;
};

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
