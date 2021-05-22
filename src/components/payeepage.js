import React from "react";




const Payeepage = (props) => {



    const msg = "I'm the Payee Page!";

    const showme = (e) => {
        e.preventDefault();
        console.log('Payee is set as...');
        console.log(props.Payee);
    }

    const data = props.Payee;

    return (

        <div>

        <h1>{msg}</h1>

        <button onClick={showme}>Show Me</button>

    <h1>{data.Name}</h1>
    <p>{props.Payee.Address.Address1}</p>

        </div>


    );
}

export default Payeepage;