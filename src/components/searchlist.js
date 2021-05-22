import React from "react";
// import jsondata from "../jsondata.json";




const Hitlist = (props) => {



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





        </div>
    );
}

export default Hitlist;