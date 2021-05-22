import './App.css';
import React, { useState } from "react";
import Payeepage from './components/payeepage';
import Searchbar from "./components/searchbar.js";
import Hitlist from './components/searchlist';
import jsondata from "./jsondata.json";

function App() {


  const [setPayee, Payee] = useState("");
  const [Searchhits, setSearchhits] = useState([]);
  const [Searchword, setSearchword] = useState("");


  const setitup = (e) => {
    e.preventDefault();
    setSearchhits(jsondata)
    console.log('jsondata: ', jsondata);
  }

  const logssearch = (e) => {
    e.preventDefault();
    console.log('Here is the Search Terms: ', Searchword)
  }

  return (

    <div className="App">

      <Searchbar
        setitup={setitup}
        Searchword={Searchword}
        setSearchword={setSearchword} />

      {(Payee === "") ? <Payeepage /> : <Hitlist
        Searchhits={Searchhits}
        setSearchhits={setSearchhits}
      />}


      <button onClick={logssearch}>This will log it??</button>

    </div>
  );
}

export default App;
