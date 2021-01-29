// Clock.js
import React from "react";
// import ReactDOM from "react-dom";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                {"Il est "}
                {this.state.date.toLocaleDateString()}{" "}
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

module.exports = Clock;
