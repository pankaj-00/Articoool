import React from "react";
import Blogtile from "./Blogtile";
import "./blogtiles.css";

const Blogtiles = () => {
  return (
    <div className="blogTiles">
      <Blogtile />
      <Blogtile />
      <Blogtile />
      <div className="blogTiles2">
        <Blogtile />
        <Blogtile />
        <Blogtile />
      </div>
    </div>
  );
};

export default Blogtiles;
