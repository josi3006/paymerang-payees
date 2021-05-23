import React from "react";
import "../style.css";
import PaymerangIcon from "../images/paymerangicon.png";



const Hitlist = (props) => {






    const chooseDataItem = (e, chosenOne) => {
        e.preventDefault();
        props.setDataItem(chosenOne);
    }


    return (

        <div>

            { (props.Searchhits.length === 0) ?

                <div className="centerblock">
                    <img src={PaymerangIcon} alt="Paymerang Icon" /><br /><br /><br />
                    <h1>Welcome to the payment search page!</h1><br />
                    <p>Please use the search bar at the top to search Payees</p>
                </div>

                :

                <div>

                    <div className="row mt-3 mb-2">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-1 text-left header">Payee</div>
                        <div className="col-sm-2 text-left header">Payment</div>
                        <div className="col-sm-auto text-left header">Submission Date</div>
                    </div>





                    {props.Searchhits.map((hititem) => {

                        let PANarray = (hititem.Payment.PAN.toString()).split("");
                        let lastfour = PANarray.slice(12, 16).join('');
                        let hiddenPAN = ("************" + lastfour);

                        return (

                            <div className="row mt-1" key={toString(Date.now()) + hititem}>

                                <div className="col-sm-1"></div>

                                <div className="col-sm-1 text-left linky" onClick={(e) => chooseDataItem(e, hititem)}>
                                    {hititem.Payee.Name}
                                </div>

                                <div className="col-sm-2 text-left">
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