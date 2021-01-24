import React from "react";

export default function Header(props) {
  const { nasaData } = props;

  return (
    <div>
      {/* <h3>Title</h3> */}
      {!nasaData.url ? (
        <h3>Loading...</h3>
      ) : (
        <img src={nasaData.url} alt={nasaData.media_type} />
      )}
      {nasaData.title}
    </div>
  );
}
