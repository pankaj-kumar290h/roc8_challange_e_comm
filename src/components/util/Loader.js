import React from "react";
import { FiLoader } from "react-icons/fi";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader_screen">
      <div className="loader">
        <FiLoader />
      </div>
    </div>
  );
};

export default Loader;
