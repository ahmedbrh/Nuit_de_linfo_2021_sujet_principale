
import React, { useState } from "react";
import "./SearchBar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";


function SearchBar({ placeholder, data }) {
    // const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        console.log("lol")
    };

    // const clearInput = () => {
    //     setFilteredData([]);
    //     setWordEntered("");
    // };
    const handleSubmit = (e) => {
        console.log("lol")
        e.preventDefault()

    }


    {/* {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={value.link} target="_blank">
                                <p>{value.title} </p>
                            </a>
                        );
                    })}
                </div>
            )} */}



}

export default SearchBar;