import React from "react";
import { BrowserRouter as Router, Route, Routes,HashRouter } from "react-router-dom";
import Header from "./componets/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./componets/Home";
import '../src/style/Home.css'
import '../src/style/Header.css'
import '../src/style/firstPage.css'
import '../src/style/Cart.css'
import FirstPage from "./componets/FirstPage";
import Cart from "./componets/Cart";


function App() {
  return (
    <HashRouter>
      <Header />
      <div>
        <Routes>
        <Route path="/" element={<FirstPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
      
    </HashRouter>
  );
}

export default App;
