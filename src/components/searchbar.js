import React from "react";
// import jsondata from "../jsondata.json";




const Searchbar = (props) => {


    const reset = (e) => {
        e.preventDefault();
        window.location.reload();
    }

    const search = (e) => {
        e.preventDefault();
        props.Dosearch(e);
        props.setSearchword("")
    }


    return (

        <div id="searchbardiv">

            <form id="searchform">
                <div className='form-group'>

                    <input
                        className="inputbox ml-4 mr-1"
                        value={props.Searchword}
                        name="searchterm"
                        onChange={(event) => props.setSearchword(event.currentTarget.value)}
                        type="text"
                        placeholder="Payee Name"
                    />


                    <button className="buttonstyle mr-1" onClick={(e) => search(e)} type="submit">Search</button>

                    <button className="buttonstyle" onClick={(e) => reset(e)}>RESET</button>

                </div>
            </form>

        </div>
    );
}

export default Searchbar;