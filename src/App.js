import './App.css';
import React, { useState } from "react";
import Payeepage from './components/payeepage';
import Searchbar from "./components/searchbar.js";
import Hitlist from './components/searchlist';

function App() {


  const [setPayee, Payee] = useState("");


  return (

    <div className="App">
     

     {(Payee=== "") ? <Payeepage /> : <h1>try to post searchlist</h1>}

     <Searchbar />


     <Hitlist />

    </div>
  );
}

export default App;
