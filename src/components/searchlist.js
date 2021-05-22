import React from "react";
// import jsondata from "../jsondata.json";




const Hitlist = (props) => {






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

                            let PANarray = (hititem.Payment.PAN.toString()).split("");
                            let lastfour = PANarray.slice(12,16).join('');
                            let hiddenPAN = ("************" + lastfour);

                            return (
                                <li key={toString(Date.now()) + hititem}>
                                    {hititem.Payee.Name}
                                    {hiddenPAN}
                                    {hititem.Payee.SubmissionDate}


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