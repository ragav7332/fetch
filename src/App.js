import logo from './logo.svg';
import './App.css';
import Form from './Form';

import React from 'react'
import { Products } from './Products';
import {Routes,Route} from 'react-router-dom';
// import { Update } from './Update';

function App() {
  return (
    <div>
      <Products />
      <Form />
      <Routes>
      <Route path="/products" element={<Products />} />
      {/* <Route path="/addproduct" element={<Update />} /> */}
      </Routes>
      </div>
  )
}

export default App