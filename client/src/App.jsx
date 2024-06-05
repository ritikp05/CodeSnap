import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./component/Navbar";
import Snippets from "./Pages/Snippets";
import SingleSnippet from "./Pages/SingleSnippet";
const App = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/snippets" element={<Snippets />} />
        <Route path="/snippet/:id" element={<SingleSnippet />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
