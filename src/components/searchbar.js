import React from "react";
// import jsondata from "../jsondata.json";




const Searchbar = (props) => {

    const handlechange = (e) => {
        const { value } = e.target;
        props.setSearchword(value);
    }

    const reset = (e) => {
        e.preventDefault();
        window.location.reload();
    }


    return (

        <div>


            <input
                value={props.Searchword}
                name="searchterm"
                onChange={handlechange}
                type="text"
                placeholder="Payee Name"
            />


            <button onClick={props.Dosearch}>Search</button>

            <button onClick={(e) => reset(e)}>RESET</button>



        </div>
    );
}

export default Searchbar;