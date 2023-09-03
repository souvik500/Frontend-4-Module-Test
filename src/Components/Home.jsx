import React, { useContext, useEffect } from "react";

import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import getFetchData from "../redux/actions/getAction";
import { useState } from "react";
import HistoryContext from "../context/HistoryContext";

const Home = () => {
  const { history, setHistory } = useContext(HistoryContext);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  // useEffect(() => {
  //   console.log("data changed")
  //   if (data.length !== 0) {
  //     setHistory([...history, data]);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   dispatch(getFetchData("sun"));
  // }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="flex w-full h-10 my-6  items-center justify-center gap-6 ">
        <div>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Search Here ..."
          onChange={(e) => setInput(e.target.value)}
        />
        </div>
        <div>
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(getFetchData(input));
            setHistory([...history, input]);
          }}
        >
          Submit
        </button>

        </div>

      </div>
      {data &&
        data.map((data, idx) => (
          <div className="p-4 m-4 shadow-lg rounded-md" key={idx}>
            <h2>{data.word}</h2>

            {/* audio section */}
            {data.phonetics.map((phonetic, idx) => (
              <React.Fragment key={idx}>
                <p>{phonetic.text}</p>

                <audio controls>
                  <source src={phonetic.audio} type="audio/mp3" />
                </audio>
              </React.Fragment>
            ))}
            {data.meanings.map((data, idx) => (
              <React.Fragment key={idx}>
                <p>{data.partOfSpeech}</p>
                <p>{data.definitions[0].definition}</p>
              </React.Fragment>
            ))}
          </div>
        ))}
    </>
  );
};

export default Home;
