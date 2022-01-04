import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { MenuStorage } from './components/MenuStorage';
import { Header } from './Header';
import { Cart } from './components/Cart';
import { Provider } from 'react-redux';
import Store from './redux/Store';

function App() {
  return (
    <Provider store = {Store}>
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path="/" element={<MenuStorage/>}/>
          <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
