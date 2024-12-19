import React from "react";
import "../styles/Loader.css";

const Loader = () => {

  return (
    <div className="loader-container d-flex justify-content-center align-items-center">
      <div className="text-center">
        {/* Animated Bag Icon */}
        <div className="loader-bag">
          <img
            src={require("../assets/images/Bag.png")}
            alt="Bag Icon"
            className="loader-icon"
          />

          {/* Rolling Text */}
          <h1 className="fw-bold animation-span">
            <span class="let1">O</span>
            <span class="let2">N</span>
            <span class="let3">L</span>
            <span class="let4">I</span>
            <span class="let5">N</span>
            <span class="let6">E</span>
            <span class="let7"> - </span>
            <span class="let8"> </span>
            <span class="let9">S</span>
            <span class="let10">H</span>
            <span class="let11">O</span>
            <span class="let12">P</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
