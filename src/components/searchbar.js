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

        <div id="searchbardiv">


            <input
                className="inputbox ml-4 mr-1"
                value={props.Searchword}
                name="searchterm"
                onChange={handlechange}
                type="text"
                placeholder="Payee Name"
            />


            <button className="buttonstyle mr-1" onClick={props.Dosearch}>Search</button>

            <button className="buttonstyle" onClick={(e) => reset(e)}>RESET</button>



        </div>
    );
}

export default Searchbar;