import React, { useState, useEffect } from "react";
import jsondata from "../jsondata.json";




const Hitlist = () => {


    const [Searchhits, setSearchhits] = useState([]);

    console.log('search hits: ', Searchhits)

    // Functionality to search json data

    const setitup = (e) => {
        e.preventDefault();
        setSearchhits(jsondata)
        console.log('jsondata: ', jsondata);
    }

    return (

        <div>

            { (Searchhits.length === 0) ?

                <div>
                    <h1>Welcome to the Paymerang payment search page</h1>
                    <p>Please use the search bar at the top to search all payments</p>
                </div>

                :

                <div>
                    <ul>
                        {Searchhits.map((hititem) => {
                            return (
                                <li key={toString(Date.now()) + hititem}>
                                    {hititem.Payee.Name}
                                </li>)
                        })
                        }

                    </ul>

                    
                </div>
            }



            <button onClick={setitup}>Set it</button>


        </div>
    );
}

export default Hitlist;