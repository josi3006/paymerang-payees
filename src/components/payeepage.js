import React from "react";




const Payeepage = (props) => {




    const data = props.DataItem;

    return (

        <div>



            <h1>Payee Page!</h1>

            <div className="row" id="big-main-row">
                <div className="col" id="left-col-with-arrow">
                    {/* PLACE LEFT ARROW HERE */}
                </div>

                <div className="col" id="main-middle-col">

                    {/* PAGE CONTENT STARTS HERE */}


                    <div className="row" id="payee-basic-info">
                        <div className="col" id="payee-main-info">
                            {data.Payee.Name}<br />
                        Attn: {data.Payee.Attention}<br />
                        Payment: {data.Payment.PAN}
                        </div>

                        <div className="col" id="payee-address">
                            Phone: {data.Payee.Phone}<br />
                            FAX: {data.Payee.Fax}<br /><br />
                            {data.Payee.Address.Address1}<br />
                            {data.Payee.Address.City},
                            {data.Payee.Address.StateOrProvince}
                            {data.Payee.Address.PostalCode}<br />
                            {data.Payee.Address.Country}
                        </div>
                    </div>



                    {data.Remittance.map((remitItem) => {

                        return (

                            <div className="row mt-1 remittance-row" key={remitItem.InvoiceNo}>

                                <div className="col-sm-auto">
                                    {remitItem.PayorName}{remitItem.PayorId}<br />
                                    {remitItem.InvoiceNo}<br />
                                    {remitItem.Amount}
                                </div>

                                <div className="col text-left">
                                    {remitItem.Description}
                                </div>

                            </div>

                        )
                    })
                    }

                </div>

                {/* PAGE CONTENT ENDS HERE */}

            </div>


            

            <div className="col" id="right-col-with-arrow">
                {/* PLACE RIGHT ARROW HERE */}
            </div>

        </div>






    );
}

export default Payeepage;