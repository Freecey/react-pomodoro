// Incrementer.js
import React from "react";
// import ReactDOM from "react-dom";

let windows;
let min = 5;
let sec = 0;
const defaulttime = 25;
// let breakTime = 5;

const CountDowntimer = 60 * defaulttime; // +15 for testing

class Incrementer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            n: props.start,
            timer: null,
            cdstatus: null,
            totaltime: props.start,
        };
        this.addOneMin = this.addOneMin.bind(this);
        this.btnActionToggle = this.btnActionToggle.bind(this);
        this.btnReset = this.btnReset.bind(this);
        this.removeOneMin = this.removeOneMin.bind(this);

        this.btnBreak = this.changeMode.bind(this, "5");
        this.btnWork = this.changeMode.bind(this, "25");
    }

    // componentDidMount() {
    //this.start();
    // }

    componentWillUnmount() {
        windows.clearInterval(this.state.timer);
    }

    increment() {
        if (this.state.n === 0) {
            // console.log("Timer to break");
            this.pause();
        } else {
            this.setState((state, props) => ({n: state.n + props.step}));
        }
    }

    addOneMin() {
        // e.preventDefault()
        if (this.state.timer === null) {
            this.setState(state => ({
                n: state.n + 60,
                totaltime: this.state.totaltime + 60,
            }));
        } else {
            // console.log("Pause Before");
        }
        // this.state.timer ? console.log('Pause Before') : this.setState((state, props) => ({n: state.n + 60}))
    }

    removeOneMin() {
        // e.preventDefault()
        if (this.state.timer === null && this.state.n > 60) {
            this.setState(state => ({
                n: state.n - 60,
                totaltime: this.state.totaltime - 60,
            }));
        } else {
            if (this.state.n > 60) {
                // console.log("Pause Before");
            } else {
                // console.log("no negative timer");
            }
        }
        //this.state.timer ? console.log('Pause Before') : this.setState((state, props) => ({n: state.n - 60}))
    }

    pause() {
        const cdStatusPause = "pause";
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null,
            cdstatus: cdStatusPause,
        });
    }

    start() {
        if (this.state.cdstatus !== "pause") {
            this.setState({totaltime: this.state.n});
        }
        const cdStatusStart = "start";
        window.clearInterval(this.state.timer);
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000),
            cdstatus: cdStatusStart,
        });
    }

    btnActionToggle() {
        return this.state.timer ? this.pause() : this.start();
    }

    btnActionLabel() {
        return this.state.timer ? "pause" : "start";
    }

    btnReset() {
        if (this.state.timer === null) {
            this.setState({cdstatus: null});
            this.setState((state, props) => ({n: props.start}));
        }
    }

    changeMode(SelectTime) {
        const SelectTime2 = SelectTime * 60;
        if (this.state.timer === null) {
            this.setState(() => ({
                n: SelectTime2,
                cdstatus: null,
                totaltime: SelectTime2,
            }));
        }
    }
    // btnWork() {
    //     const SelectTime = 25 * 60;
    //     if (this.state.timer === null) {
    //         this.setState(() => ({n: SelectTime, cdstatus: null}));
    // }

    // btnBreak() {
    //     const SelectTime = 5 * 60;
    //     if (this.state.timer === null) {
    //             this.setState(() => ({n: SelectTime, cdstatus: null}));
    //     }
    // }

    txtAction() {
        if (this.state.timer === null) {
            if (this.state.n === 0) {
                return "Yeah stop to work, Time to take a break";
            }
            if (this.state.cdstatus === null) {
                // this.state.n === CountDowntimer &&
                return "Click to Start CountDown";
            }
            if (this.state.cdstatus !== null) {
                return "CountDown in PAUSE";
            }
        }
        if (this.state.timer !== null) {
            return "Concentration, it is working time";
        }
        return null;
        //return this.state.timer ? "Concentration, it is working time" : "Yeah stop to work, Time to take a break";
    }

    percentage(partialValue, totalValue) {
        // return (100 * partialValue) / totalValue;
        let percent = (100 - (100 * partialValue) / totalValue).toFixed(2);
        let classBar;
        if (percent >= 90) {
            classBar = "bg-danger";
        }
        if (percent < 90 && percent > 60) {
            classBar = "bg-warning";
        }
        if (percent <= 60) {
            classBar = "bg-success";
        }
        percent = percent.toString();
        percent = `${percent}%`;
        // percent = percent - 100
        return [percent, classBar];
    }

    // txtBtnAction() {
    // if (this.state.timer !== null) {
    //     console.log("Pause Before");
    // }
    // }

    render() {
        min = Math.round(Math.floor(this.state.n / 60));
        sec = this.state.n % 60;
        sec = sec.toString().padStart(2, "0");
        // console.log(this.state.timer);
        const addOneMin = this.addOneMin;
        const btnActionToggle = this.btnActionToggle;
        const btnReset = this.btnReset;
        const removeOneMin = this.removeOneMin;
        const btnWork = this.btnWork;
        const btnBreak = this.btnBreak;
        const totalSec = this.state.totaltime;
        const leftSec = this.state.n;
        const progBarStyle = this.percentage(leftSec, totalSec);
        const progBarStyleClass = progBarStyle[1];
        const divStyle = {
            width: progBarStyle[0],
        };
        let animatedBarClass;
        if (this.state.timer === null || leftSec === 0) {
            animatedBarClass = `progress-bar bg-success progress-bar-striped${progBarStyleClass}`;
        } else {
            animatedBarClass = `progress-bar bg-success progress-bar-striped progress-bar-animated${progBarStyleClass}`;
        }

        return (
            <div>
                <div />
                <button
                    type={"button"}
                    className={"btn btn-info btn-lg m-2"}
                    onClick={btnWork}>
                    {"Work"}
                </button>
                <button
                    type={"button"}
                    className={"btn btn-info btn-lg m-2"}
                    onClick={btnBreak}>
                    {"Break"}
                </button>
                <div className={"col-12 col-lg-6 mx-auto"}>
                    <div className={"progress"} style={{height: "30px"}}>
                        <div
                            className={animatedBarClass}
                            role={"progressbar"}
                            style={divStyle}
                            aria-valuenow={leftSec}
                            aria-valuemin={"0"}
                            aria-valuemax={totalSec}>
                            {progBarStyle[0]}
                        </div>
                    </div>
                </div>
                {/* <div>{this.txtBtnAction()}</div> */}
                <div
                    className={
                        "d-flex display-1 timer mx-auto border border-primary rounded-circle my-3"
                    }>
                    <div className={"my-auto mx-auto"}>
                        {min}
                        {":"}
                        {sec}
                    </div>
                </div>

                <div className={"my-3"}>
                    <button
                        type={"button"}
                        className={"btn btn-primary mx-1"}
                        onClick={addOneMin}>
                        {" + 1 Min "}
                    </button>
                    <button
                        type={"button"}
                        className={"btn btn-primary mx-1"}
                        onClick={btnActionToggle}>
                        {this.btnActionLabel()}
                    </button>
                    <button
                        type={"button"}
                        className={"btn btn-primary mx-1"}
                        onClick={btnReset}>
                        {" Reset "}
                    </button>
                    <button
                        type={"button"}
                        className={"btn btn-primary mx-1"}
                        onClick={removeOneMin}>
                        {" - 1 Min "}
                    </button>
                </div>
                <div className={" text-center col-12 col-lg-6 mx-auto"}>
                    <div className={"alert alert-info "}>
                        {this.txtAction()}
                    </div>
                </div>
            </div>
        );
    }
}

Incrementer.defaultProps = {
    start: CountDowntimer,
    step: -1,
};

module.exports = Incrementer;
