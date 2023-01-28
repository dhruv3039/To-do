import React, { useState } from "react";
import Home from "./components/Home/Home";
import AddData from "./components/Form/AddData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
