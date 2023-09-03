import React, { useContext } from "react";
import Navbar from "./Navbar";
import HistoryContext from "../context/HistoryContext";
import { Link } from "react-router-dom";
const HistoryPage = () => {
  const { history, _ } = useContext(HistoryContext);

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        {history &&
          history.map((search, idx) => (
            <Link
              to={`/${search}`}
              key={idx}
              className="underline mx-4 my-2 text-blue-700 w-min"
            >
              {search}
            </Link>
          ))}
      </div>
    </>
  );
};

export default HistoryPage;
