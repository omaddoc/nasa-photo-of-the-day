import React from "react";
// import { BASE_URL, API_KEY } from "../constants";
// import axios from "axios";
import Header from "./Header";
import Description from "./Description";

export default function Card(props) {
  const { nasaData } = props;

  return (
    <div>
      <Header nasaData={nasaData} />
      <Description nasaData={nasaData} />
    </div>
  );
}
