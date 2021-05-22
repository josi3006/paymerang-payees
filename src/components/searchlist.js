import React from "react";
import "../style.css";
// import jsondata from "../jsondata.json";




const Hitlist = (props) => {






    const choosePayee = (e, chosenOne) => {
        e.preventDefault();
        props.setPayee(chosenOne);
    }


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
                        <li>Payee Payment Submission Date</li>
                        {props.Searchhits.map((hititem) => {

                            let PANarray = (hititem.Payment.PAN.toString()).split("");
                            let lastfour = PANarray.slice(12, 16).join('');
                            let hiddenPAN = ("************" + lastfour);

                            return (

                                <div className="row" key={toString(Date.now()) + hititem}>

                                    <div className="col linky" onClick={(e) => choosePayee(e, hititem.Payee)}>
                                        {hititem.Payee.Name}
                                    </div>

                                    <div className="col">
                                        {hiddenPAN}
                                    </div>


                                    <div className="col">
                                        {hititem.Payee.SubmissionDate}
                                    </div>


                                </div>



                            )
                        })
                        }
                    </ul>



                </div>
            }





        </div>
    );
}

export default Hitlist;