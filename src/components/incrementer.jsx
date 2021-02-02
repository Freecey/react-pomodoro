// Incrementer.js
import React from "react";
import {Modal, Button} from "react-bootstrap";
import UIfx from "uifx";
import dohAudio from "../sounds/doh.mp3";
import woohooAudio from "../sounds/woohoo.mp3";

const doh = new UIfx(dohAudio);
const woohoo = new UIfx(woohooAudio);

let windows;
let min = 5;
let sec = 0;
const defaulttime = 25;
const CountDowntimer = 60 * defaulttime; // +15 for testing

class Incrementer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            n: props.start,
            timer: null,
            cdstatus: null,
            totaltime: props.start,
            isOpen: false,
            currenttask: null,
        };
        this.addOneMin = this.addOneMin.bind(this);

        this.btnActionToggle = this.btnActionToggle.bind(this);
        this.btnReset = this.btnReset.bind(this);
        this.removeOneMin = this.removeOneMin.bind(this);

        this.btnBreak = this.changeMode.bind(this, "5");
        this.btnWork = this.changeMode.bind(this, "25");
        this.startBreak = this.startBreak.bind(this);
    }

    componentWillUnmount() {
        windows.clearInterval(this.state.timer);
    }

    increment() {
        if (this.state.n === 0) {
            if (this.state.currenttask === true) {
                this.openModal();
                this.pause();
                this.setState({currenttask: null});
                doh.play(1.0);
            } else {
                this.openModal();
                this.pause();
                this.setState({currenttask: true});
                woohoo.play(1.0);
            }
        } else {
            this.setState((state, props) => ({n: state.n + props.step}));
        }
    }

    addOneMin() {
        if (this.state.timer === null) {
            this.setState((state) => ({
                n: state.n + 60,
                totaltime: this.state.totaltime + 60,
            }));
        } else {
        }
    }

    removeOneMin() {
        if (this.state.timer === null && this.state.n > 60) {
            this.setState((state) => ({
                n: state.n - 60,
                totaltime: this.state.totaltime - 60,
            }));
        } else {
            if (this.state.n > 60) {
            } else {
            }
        }
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

    startBreak() {
        if (this.state.timer === null) {
            if (this.state.currenttask === null) {
                const SelectTime2 = 25 * 60;
                this.setState(() => ({
                    n: SelectTime2,
                    cdstatus: null,
                    totaltime: SelectTime2,
                }));
            }
            if (this.state.currenttask === true) {
                const SelectTime2 = 5 * 60;
                this.setState(() => ({
                    n: SelectTime2,
                    cdstatus: true,
                    totaltime: SelectTime2,
                }));
            }

            if (this.state.cdstatus !== "pause") {
                this.setState({totaltime: this.state.n});
            }
            const cdStatusStart = "start";
            window.clearInterval(this.state.timer);
            this.setState({
                timer: window.setInterval(this.increment.bind(this), 1000),
                cdstatus: cdStatusStart,
                isOpen: false,
            });
        }
    }

    btnActionToggle() {
        return this.state.timer ? this.pause() : this.start();
    }

    btnActionLabel() {
        return this.state.timer ? "Pause" : "Start";
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
            if (this.state.currenttask === true) {
                this.setState({currenttask: null});
            } else {
                this.setState({currenttask: true});
            }
            this.setState(() => ({
                n: SelectTime2,
                cdstatus: null,
                totaltime: SelectTime2,
            }));
        }
    }

    txtAction() {
        if (this.state.timer === null) {
            if (this.state.n === 0) {
                if (this.state.currenttask === true) {
                    return "Woohoo, stop to work, Time to take a break";
                }
                if (this.state.currenttask === null) {
                    return "D'oh, Focus, it is working time";
                }
            }
            if (this.state.cdstatus === null) {
                return "Click to Start CountDown";
            }
            if (this.state.cdstatus !== null) {
                return "CountDown in PAUSE";
            }
        }
        if (this.state.timer !== null) {
            if (this.state.currenttask === null) {
                return "D'oh, Focus, it is working time";
            }
            if (this.state.currenttask === true) {
                return "Woohoo,  stop to work, Time to take a break";
            }
        }
        return null;
    }

    percentage(partialValue, totalValue) {
        let percent = (100 - (100 * partialValue) / totalValue).toFixed(2);
        let classBar;
        let classText;
        if (percent >= 90) {
            classBar = "bg-danger";
            classText = "text-danger";
        }
        if (percent < 90 && percent > 60) {
            classBar = "bg-warning";
            classText = "text-warning";
        }
        if (percent <= 60) {
            classBar = "bg-success";
            classText = "text-success";
        }
        percent = percent.toString();
        percent = `${percent}%`;
        return [percent, classBar, classText];
    }

    openModal = () => this.setState({isOpen: true});
    closeModal = () => this.setState({isOpen: false});

    render() {
        min = Math.round(Math.floor(this.state.n / 60));
        sec = this.state.n % 60;
        sec = sec.toString().padStart(2, "0");
        const addOneMin = this.addOneMin;
        const btnActionToggle = this.btnActionToggle;
        const startBreak = this.startBreak;
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
            animatedBarClass = `progress-bar ${progBarStyleClass} progress-bar-striped`;
        } else {
            animatedBarClass = `progress-bar ${progBarStyleClass} progress-bar-striped progress-bar-animated`;
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
                <div
                    className={
                        "d-flex display-1 timer mx-auto border border-primary rounded-circle my-3"
                    }>
                    <div className={`my-auto mx-auto ${progBarStyle[2]}`}>
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
                        <div>{this.txtAction()}</div>
                        <div>
                            <small>
                                {
                                    "(pause before to +/- 1 min and use Work/Break/Reset button)"
                                }
                            </small>
                        </div>
                    </div>
                </div>
                {/* <Button variant="primary" onClick={this.openModal}>
            Launch demo modal   
          </Button> */}

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{"Timer Finish"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center "></div>
                        <div className="text-center my-5">
                            <button
                                type={"button"}
                                className={"btn btn-primary mx-auto"}
                                onClick={startBreak}>
                                {this.txtAction()}
                                <br />
                                {this.btnActionLabel()}
                            </button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            {"Close"}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

Incrementer.defaultProps = {
    start: CountDowntimer,
    step: -1,
    currenttask: true,
};

module.exports = Incrementer;
