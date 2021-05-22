import React from "react";




const Payeepage = (props) => {



    const msg = "I'm the Payee Page!";




    const showme = (e) => {
        e.preventDefault();
        console.log('Payee is set as...');
        console.log(props.Payee);
    }

    return (

        <div>

        <h1>{msg}</h1>

        <button onClick={showme}>Show Me</button>

        </div>


    );
}

export default Payeepage;