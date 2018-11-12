import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="loading"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          marginBottom: "50px",
          display: "block"
        }}
      />
    </div>
  );
}
