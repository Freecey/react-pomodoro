// Welcome.js

import React from "react";
// import ReactDOM from "react-dom";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className={"h4 pt-2 text-white-50"}>
                    {"Hello "}
                    {this.props.name}
                </div>
                <p>{this.props.children}</p>
                <div>
                    <h1 className={"my-4"}>{"Welcome to my Pomodoro"}</h1>
                </div>
            </div>
        );
    }
}

module.exports = Welcome;
