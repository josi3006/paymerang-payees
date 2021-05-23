import React from "react";




const Payeepage = (props) => {



    const msg = "I'm the Payee Page!";

    const data = [props.Payee];

    return (

        <div>

            <h1>{msg}</h1>

            <div className="row" id="big-main-row">
                <div className="col" id="left-col-with-arrow">
                    {/* PLACE LEFT ARROW HERE */}
                </div>

                <div className="col" id="main-middle-col">

                    {/* PAGE CONTENT STARTS HERE */}


                    <div className="row" id="payee-basic-info">
                        <div className="col" id="payee-main-info"></div>

                        <div className="col" id="payee-address"></div>
                    </div>

                    <div className="row" className="remittance-row">
                        
                    </div>

                  





                    {/* PAGE CONTENT ENDS HERE */}

                </div>

                <div className="col" id="right-col-with-arrow">
                    {/* PLACE RIGHT ARROW HERE */}
                </div>

            </div>



            <h1>{data.Name}</h1>
            <p>{data.Address.Address1}</p>


        </div >


    );
}

export default Payeepage;