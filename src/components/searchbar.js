import React, { useState, useEffect } from "react";
import jsondata from "../jsondata.json";




const Searchbar = (props) => {

    const handlechange = (e) => {
        const { value } = e.target;
        props.setSearchword(value);
    }


    return (

        <div>


            <input
                value={props.Searchword}
                name="searchterm"
                onChange={handlechange}
                type="text"
                placeholder="Search Terms"
            />


            <button onClick={props.setitup}>Set it</button>




        </div>
    );
}

export default Searchbar;