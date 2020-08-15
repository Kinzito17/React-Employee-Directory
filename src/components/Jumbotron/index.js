import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Jumbotron() {
    return (
        <div className="jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
            </div>
        </div>
    );
}

export default Jumbotron;
