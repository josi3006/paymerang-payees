import React, { useState, useEffect } from "react";




const Hitlist = () => {


    const [Searchhits, setSearchhits] = useState([]);

    console.log('Here is the list: ' + Searchhits)

    // Functionality to search json data

    const setitup = (e) => {
        e.preventDefault();
        setSearchhits(["foo", "bar", "baz"])
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
                                    {hititem}
                                </li>)
                        })
                        }

                    </ul>
                </div>
            }



            <button onClick={setitup}>Set it</button>

            <button onClick={console.log('hits are: ' + Searchhits)}>Log it</button>

        </div>
    );
}

export default Hitlist;