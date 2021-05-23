import React from "react";
import jsondata from "../jsondata.json";




const Payeepage = (props) => {




    const data = props.DataItem;



    let PANarray = (data.Payment.PAN.toString()).split("");
    let lastfour = PANarray.slice(12, 16).join('');
    let hiddenPAN = ("************" + lastfour);


    const nextItem = (e) => {
        e.preventDefault();
        let currItem = jsondata.indexOf(props.DataItem);
        let nextIndex = currItem + 1;
        if (nextIndex < jsondata.length) 
        props.setDataItem(jsondata[nextIndex]);
        
    }

    const previousItem = (e) => {
        e.preventDefault();
        let currItem = jsondata.indexOf(props.DataItem);
        let previousIndex = currItem - 1;
        if (previousIndex >= 0) 
        props.setDataItem(jsondata[previousIndex]);
    }



    return (

        <div>



            <h1>Payee Page!</h1>

            <div className="row" id="big-main-row">
                <div className="col-2" id="left-col-with-arrow">
                    {/* PLACE LEFT ARROW HERE */}
                    <button onClick={(e) => previousItem(e)}>previous</button>

                </div>

                <div className="col auto" id="main-middle-col">

                    {/* PAGE CONTENT STARTS HERE */}








                    <div className="row mb-5" id="payee-basic-info">
                        <div className="col text-left" id="payee-main-info">
                            <h4>{data.Payee.Name}</h4>
                        Attn: {data.Payee.Attention}<br />
                        Payment: {hiddenPAN}
                        </div>

                        <div className="col addy-info text-right" id="payee-address">
                            <div>Phone: {data.Payee.Phone}</div>
                            <div>FAX: {data.Payee.Fax}</div>
                            <div>{data.Payee.Address.Address1}</div>
                            <span>{data.Payee.Address.City}, </span>
                            <span>{data.Payee.Address.StateOrProvince} </span>
                            <span>{data.Payee.Address.PostalCode}</span>
                            <div>{data.Payee.Address.Country}</div>
                        </div>
                    </div>

                    {data.Remittance.map((remitItem) => {

                        return (

                            <div className="row mt-1 remittance-row" key={remitItem.InvoiceNo}>

                                <div className="col-sm-3 text-left">
                                    <span>{remitItem.PayorName} &#40;ID# {remitItem.PayorId}&#41;</span>
                                    <div>Invoice: {remitItem.InvoiceNo}</div>
                                    <div>Amount: {remitItem.Amount}</div>
                                </div>

                                <div className="col auto text-left">
                                    <div className="text-wrap">Description: {remitItem.Description}</div>
                                </div>

                            </div>

                        )
                    })
                    }

                </div>

                {/* PAGE CONTENT ENDS HERE */}


                <div className="col-2" id="right-col-with-arrow">
                    {/* PLACE RIGHT ARROW HERE */}

                    <button onClick={(e) => nextItem(e)}>next</button>
                </div>


            </div>






        </div>






    );
}

export default Payeepage;