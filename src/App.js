import './App.css';
import React, { useState } from "react";
import Payeepage from './components/payeepage';
import Searchbar from "./components/searchbar.js";
import Hitlist from './components/searchlist';
import jsondata from "./jsondata.json";

function App() {


  const [DataItem, setDataItem] = useState("");
  const [Searchhits, setSearchhits] = useState([]);
  const [Searchword, setSearchword] = useState("");



  const Dosearch = (e) => {
    e.preventDefault();
    const allhits = jsondata.filter((terms) => {
      return terms.Payee.Name.toLowerCase().includes(Searchword.toLowerCase())
    });
    setSearchhits(allhits);
  }


  return (

    <div className="App">

      <Searchbar
        Dosearch={Dosearch}
        Searchword={Searchword}
        setSearchword={setSearchword} />

      {(DataItem === "") ? <Hitlist
        Searchhits={Searchhits}
        setSearchhits={setSearchhits}
        setDataItem={setDataItem}
        DataItem={DataItem}
      /> : <Payeepage
        DataItem={DataItem}
        setDataItem={setDataItem} />}

    </div>
  );
}

export default App;
