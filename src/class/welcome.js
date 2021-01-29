// Welcome.js

import React from "react";
// import ReactDOM from "react-dom";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {"Hello "}
                    {this.props.name}
                </h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

module.exports = Welcome;
