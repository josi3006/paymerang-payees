import './App.css';
import React, { useState } from "react";
import Payeepage from './components/payeepage';
import Searchbar from "./components/searchbar.js";
import Hitlist from './components/searchlist';
import jsondata from "./jsondata.json";

function App() {


  const [Payee, setPayee] = useState("");
  const [Searchhits, setSearchhits] = useState([]);
  const [Searchword, setSearchword] = useState("");



  const Dosearch = (e) => {
    e.preventDefault();
    const allhits = jsondata.filter((terms) => {
      return terms.Payee.Name.toLowerCase().includes(Searchword.toLowerCase())
    });
    setSearchhits(allhits);
    console.log(allhits);
  }



  return (

    <div className="App">

      <Searchbar
        Dosearch={Dosearch}
        Searchword={Searchword}
        setSearchword={setSearchword} />

      {(Payee === "") ? <Hitlist
        Searchhits={Searchhits}
        setSearchhits={setSearchhits}
        setPayee={setPayee}
        Payee={Payee}
      /> : <Payeepage
        Payee={Payee} />}

    </div>
  );
}

export default App;
