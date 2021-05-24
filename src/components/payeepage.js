import React from "react";
import jsondata from "../jsondata.json";
import arrow from "../images/arrow.png";




const Payeepage = (props) => {

    const data = props.DataItem;

    var gettime = new Date();
    var timenow = (gettime.getMonth() + 1) + '/' +
        gettime.getDate() + '/' +
        gettime.getFullYear() + ' - ' +
        gettime.getHours() + ":" + gettime.getMinutes();


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

        <div className="mt-4 container-fluid">



            <span className="mt-4"><h1>Payee Remittance Report</h1><div className="smallertext">Generated {timenow}</div></span>

            <div className="row" id="big-main-row">
                <div className="col-2 my-auto" id="left-col-with-arrow">
                    {/* PLACE LEFT ARROW HERE */}
                    <img src={arrow} className="previcon" onClick={(e) => previousItem(e)} alt="Previous Item" /><br />
                    <span className="smallertext">previous Payee</span>

                </div>

                <div className="col auto" id="main-middle-col">

                    {/* PAGE CONTENT STARTS HERE */}








                    <div className="row my-5" id="payee-basic-info">
                        <div className="col text-left" id="payee-main-info">
                            <h4>{data.Payee.Name}</h4>
                        <div>Attn: {data.Payee.Attention}</div>
                        <div>Payment: {hiddenPAN}</div>
                        <div>Submission Date: {data.Payee.SubmissionDate}</div>
                        </div>

                        <div className="col smallertext text-right" id="payee-address">
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


                <div className="col-2 my-auto" id="right-col-with-arrow">
                    {/* PLACE RIGHT ARROW HERE */}

                    <img src={arrow} className="nexticon" onClick={(e) => nextItem(e)} alt="Next Item" /><br />
                    <span className="smallertext">next Payee</span>
                </div>


            </div>






        </div>






    );
}

export default Payeepage;