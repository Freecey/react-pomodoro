import React from "react";
import ReactDOM from "react-dom";
const Incrementer = require("./components/incrementer");
const Clock = require("./components/clock");
const Welcome = require("./components/welcome");





function Home() {
    return (
        <div className={"full-page text-light bg-dark"}>
            <div className={"container"}>
                <div className={"col text-center"}>
                    <Welcome name={"World"} />
                    <Clock />
                    <Incrementer />
                    
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
