import React, { useState, useEffect } from "react";




const Hitlist = () => {


    const [Searchhits, setSearchhits] = useState([]);

// const setitup = (e) => {
//     e.preventDefault();
//     setSearchhits(["foo","bar","baz"])
// }

    return (

        <div>

            { (Searchhits.length === 0) ? <h1>Hello! No hits!</h1> : <h1>here's a list of many hits</h1> }

            { console.log('length is: ' + Searchhits.length)}

            {/* <button onClick={setitup} /> */}

        </div>
    );
}

export default Hitlist;