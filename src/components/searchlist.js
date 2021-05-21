import React, { useState, useEffect } from "react";
// import jsondata from "../jsondata.json";




const Hitlist = (props) => {



    console.log('search hits: ', props.Searchhits)

    // Functionality to search json data

   

    return (

        <div>

            { (props.Searchhits.length === 0) ?

                <div>
                    <h1>Welcome to the Paymerang payment search page</h1>
                    <p>Please use the search bar at the top to search all payments</p>
                </div>

                :

                <div>
                    <ul>
                        {props.Searchhits.map((hititem) => {
                            return (
                                <li key={toString(Date.now()) + hititem}>
                                    {hititem.Payee.Name}
                                </li>)
                        })
                        }

                    </ul>


                </div>
            }



            {/* <button onClick={setitup}>Set it</button> */}


        </div>
    );
}

export default Hitlist;