import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./components/ItemListContainer";
import Navbar from './components/Navbar';
import Header from './components/Header';
import ItemDetailContainer from './components/item_detail';



function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;