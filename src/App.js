import './App.css';
import React, { useState } from "react";
import Payeepage from './components/payeepage';
import Searchbar from "./components/searchbar.js";
import Hitlist from './components/searchlist';

function App() {


  const [setPayee, Payee] = useState("");


  return (

    <div className="App">

      <Searchbar />

      {(Payee === "") ? <Payeepage /> : <Hitlist />}

    </div>
  );
}

export default App;
