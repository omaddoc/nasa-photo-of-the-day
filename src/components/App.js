import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../constants/index";
import axios from "axios";
import Card from "./Card";

import "../App.css";

// console.log(`${BASE_URL}${API_KEY}`);

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${BASE_URL}${API_KEY}`)
        .then((res) => {
          console.log(res.data);
          setNasaData(res);
        })
        .catch((err) => {
          debugger;
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>Test</h1>
      <Card />
    </div>
  );
}

export default App;
