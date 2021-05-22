import React from "react";
// import jsondata from "../jsondata.json";




const Searchbar = (props) => {

    const handlechange = (e) => {
        const { value } = e.target;
        props.setSearchword(value);
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



        </div>
    );
}

export default Searchbar;