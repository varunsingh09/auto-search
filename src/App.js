import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Lookup from "./Lookup"
import SearchBar from "./search/SearchBar"

export default function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<SearchBar/>}/>
        <Route exact path="/lookup" element={<Lookup/>}/>
      </Routes>
  </Router>
  </>
  )

}