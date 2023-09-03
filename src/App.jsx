import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import HistoryPage from "./Components/HistoryPage";
import ShowData from "./Components/ShowData";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:word" element={<ShowData  />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </>
  );
};

export default App;
