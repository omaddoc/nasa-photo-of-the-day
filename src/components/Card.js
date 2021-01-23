import React, { useState, useEffect } from "react";
// import { BASE_URL, API_KEY } from "../constants";
// import axios from "axios";
import Header from "./Header";
import Description from "./Description";

export default function Card(props) {
  return (
    <div>
      <h2>Card</h2>
      <Header />
      <Description />
    </div>
  );
}
