import React from "react";
import ReactDOM from "react-dom";
import Code from "./Code";
import Search from "./Search";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="border">
        <div>
          <Search />
          <Weather />
          <Code />
        </div>
      </div>
    </div>
  );
}