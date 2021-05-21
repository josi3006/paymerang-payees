import './App.css';
import React, { useState } from "react";
import Payeepage from './components/payeepage';
import Searchbar from "./components/searchbar.js";
import Hitlist from './components/searchlist';
import jsondata from "./jsondata.json";

function App() {


  const [setPayee, Payee] = useState("");
  const [Searchhits, setSearchhits] = useState([]);

  
  const setitup = (e) => {
    e.preventDefault();
    setSearchhits(jsondata)
    console.log('jsondata: ', jsondata);
}

  return (

    <div className="App">

      <Searchbar 
      setitup={setitup}/>

      {(Payee === "") ? <Payeepage /> : <Hitlist 
      Searchhits={Searchhits}
      setSearchhits={setSearchhits}


      />}

    </div>
  );
}

export default App;
