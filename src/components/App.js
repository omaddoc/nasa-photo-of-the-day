import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../constants/index";
import axios from "axios";
import Card from "./Card";

import "../App.css";

// console.log(`${BASE_URL}${API_KEY}`);

function App() {
  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${BASE_URL}${API_KEY}`)
        .then((res) => {
          setNasaData(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          debugger;
          console.log(err);
        });
    };

    fetchData();
  }, []);

  // console.log(nasaData);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>NASA</h1>
      <Card nasaData={nasaData} />
    </div>
  );
}

export default App;
