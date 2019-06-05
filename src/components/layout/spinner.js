import React from "react";
import Spinner from "./spinner.gif";

export default function spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt='Loading..'
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}
