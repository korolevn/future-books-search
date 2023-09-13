import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { DetailsPage } from "./components/DetailsPage/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/:id" element={<DetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
