import React from "react";
// import { BASE_URL, API_KEY } from "../constants";
// import axios from "axios";
import Header from "./Header";
import Description from "./Description";
import styled from "styled-components";

export default function Card(props) {
  const { nasaData } = props;

  return (
    <StyledCard>
      <Header nasaData={nasaData} />
      <Description nasaData={nasaData} />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  /* background-color: #222222; */
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  /* color: white; */
`;
