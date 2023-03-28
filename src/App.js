import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/HOME/Home";
import AddBook from "./Pages/AddBook/AddBook";
import ViewBook from "./Pages/ViewBook/ViewBook";




function App() {
  return (
    < >
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add-book" element={<AddBook />}></Route>
      <Route path= "/view-book" element={<ViewBook />}></Route>
      
    </Routes>
      
      
    </>
  );
}

export default App;
