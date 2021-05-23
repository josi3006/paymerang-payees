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

                

                    <h4>Payee Payment Submission Date</h4>
                        {props.Searchhits.map((hititem) => {

                            let PANarray = (hititem.Payment.PAN.toString()).split("");
                            let lastfour = PANarray.slice(12, 16).join('');
                            let hiddenPAN = ("************" + lastfour);

                            return (

                                <div className="row" key={toString(Date.now()) + hititem}>

                                    <div className="col-sm-1"></div>

                                    <div className="col-sm-1 text-left linky" onClick={(e) => choosePayee(e, hititem.Payee)}>
                                        {hititem.Payee.Name}
                                    </div>

                                    <div className="col-sm-auto text-left">
                                        {hiddenPAN}
                                    </div>


                                    <div className="col-sm-auto text-left">
                                        {hititem.Payee.SubmissionDate}
                                    </div>


                                </div>



                            )
                        })
                        }



                </div>
            }





        </div>
    );
}

export default Hitlist;