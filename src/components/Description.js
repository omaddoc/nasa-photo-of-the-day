import React from "react";
import styled from "styled-components";

export default function Description(props) {
  const { nasaData } = props;

  return (
    <StyledDescription>
      {/* <h3>Description</h3> */}
      <p>{nasaData.explanation}</p>
      <div className="bottom">
        <p>{nasaData.service_version}</p>
        <p>{nasaData.copyright}</p>
        <p>{nasaData.date}</p>
      </div>
    </StyledDescription>
  );
}

const StyledDescription = styled.div`
  width: 85%;
  margin: 0 auto;

  .bottom {
    display: flex;
    justify-content: space-around;
  }
`;
