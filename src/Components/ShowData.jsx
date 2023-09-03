import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const ShowData = () => {
  const { word } = useParams();
  const [data, setData] = useState(null);

  useEffect(fetch, []);

  function fetch() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        // dispatch(getFetchingSuccess(res.data));
        setData(res.data);
      })
      .catch((err) => {
        // dispatch(getFetchingError(err.data));
      });
  }

  return (
    <>
      <Navbar />
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

export default ShowData;
