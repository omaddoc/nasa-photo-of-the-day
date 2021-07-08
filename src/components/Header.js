import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const { nasaData } = props;

  return (
    <StyledHeader>
      {/* <h3>Title</h3> */}
      {!nasaData.url ? (
        <h3>Loading...</h3>
      ) : (
        <img className="image" src={nasaData.url} alt={nasaData.media_type} />
      )}
      {nasaData.title}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;

  .image {
    height: 500px;
    align-self: center;
    margin-bottom: 20px;
    border-radius: 50%;
  }
`;
