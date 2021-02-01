import React from "react";
import ReactDOM from "react-dom";
const Incrementer = require("./components/incrementer.js");
const Clock = require("./components/clock.js");
const Welcome = require("./components/welcome.js");

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
