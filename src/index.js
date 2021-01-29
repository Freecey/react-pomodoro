import React from "react";
import ReactDOM from "react-dom";
const Incrementer = require("./class/incrementer.js");
const Clock = require("./class/clock.js");
const Welcome = require("./class/welcome.js");

function Home() {
    return (
        <div>
            <Welcome name={"World"} />
            <Clock />
            <Incrementer />
        </div>
    );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
