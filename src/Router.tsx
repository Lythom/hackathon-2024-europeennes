import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/questions">
        <Route index element={<QuestionsPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
