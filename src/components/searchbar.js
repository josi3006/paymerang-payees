import React, { useState, useEffect } from "react";
import jsondata from "../jsondata.json";




const Searchbar = (props) => {

    // const [Searchhits, setSearchhits] = useState([]);


    // const setitup = (e) => {
    //     e.preventDefault();
    //     props.setSearchhits(jsondata)
    //     console.log('jsondata: ', jsondata);
    // }

    const msg = "I'm the searchbar!";



    return (

        <div>
            <h1>{msg}</h1>

            <button onClick={props.setitup}>Set it</button>


        </div>
    );
}

export default Searchbar;