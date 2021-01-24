import React from "react";

export default function Description(props) {
  const { nasaData } = props;

  return (
    <div>
      {/* <h3>Description</h3> */}
      <p>{nasaData.explanation}</p>
      <div>
        <p>{nasaData.service_version}</p>
        <p>{nasaData.copyright}</p>
        <p>{nasaData.date}</p>
      </div>
    </div>
  );
}
