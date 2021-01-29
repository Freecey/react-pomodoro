// // Incrementer.js
// import React from "react";
// // import ReactDOM from "react-dom";

// let windows;
// let min = 5;
// let sec = 0;
// const defaulttime = 25;
// // let breakTime = 5;

// const CountDowntimer = 60 * defaulttime; // +15 for testing

// class Incrementer extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {n: props.start, timer: null, cdstatus: null};
//         this.addOneMin = this.addOneMin.bind(this);
//         this.btnActionToggle = this.btnActionToggle.bind(this);
//         this.btnReset = this.btnReset.bind(this);
//         this.removeOneMin = this.removeOneMin.bind(this);

//         this.btnBreak = this.btnBreak.bind(this);
//         this.btnWork = this.btnWork.bind(this);
//     }

//     // componentDidMount() {
//     //this.start();
//     // }

//     componentWillUnmount() {
//         windows.clearInterval(this.state.timer);
//     }

//     increment() {
//         if (this.state.n === 0) {
//             // console.log("Timer to break");
//             this.pause();
//         } else {
//             this.setState((state, props) => ({n: state.n + props.step}));
//         }
//     }

//     addOneMin() {
//         // e.preventDefault()
//         if (this.state.timer === null) {
//             this.setState((state) => ({n: state.n + 60}));
//         } else {
//             // console.log("Pause Before");
//         }
//         // this.state.timer ? console.log('Pause Before') : this.setState((state, props) => ({n: state.n + 60}))
//     }

//     removeOneMin() {
//         // e.preventDefault()
//         if (this.state.timer === null && this.state.n > 60) {
//             this.setState((state) => ({n: state.n - 60}));
//         } else {
//             if (this.state.n > 60) {
//                 // console.log("Pause Before");
//             } else {
//                 // console.log("no negative timer");
//             }
//         }
//         //this.state.timer ? console.log('Pause Before') : this.setState((state, props) => ({n: state.n - 60}))
//     }

//     pause() {
//         const cdStatusPause = "pause";
//         window.clearInterval(this.state.timer);
//         this.setState({
//             timer: null,
//             cdstatus: cdStatusPause,
//         });
//     }

//     start() {
//         const cdStatusStart = "start";
//         window.clearInterval(this.state.timer);
//         this.setState({
//             timer: window.setInterval(this.increment.bind(this), 1000),
//             cdstatus: cdStatusStart,
//         });
//     }

//     btnActionToggle() {
//         return this.state.timer ? this.pause() : this.start();
//     }

//     btnActionLabel() {
//         return this.state.timer ? "pause" : "start";
//     }

//     btnReset() {
//         if (this.state.timer === null) {
//             this.setState({cdstatus: null});
//             this.setState((state, props) => ({n: props.start}));
//         }
//     }

//     changeMode() {
//         const SelectTime = 5 * 60;
//         if (this.state.timer === null) {
//             {
//                 this.setState(() => ({n: SelectTime, cdstatus: null}));
//             }
//         }
//     }
//     btnWork() {

//         if (this.state.timer === null) {
//             const SelectTime = 25 * 60;
//             this.setState(() => ({n: SelectTime, cdstatus: null}));
//         }
//     }

//     btnBreak() {
//         const SelectTime = 5 * 60;
//         if (this.state.timer === null) {
//             {
//                 this.setState(() => ({n: SelectTime, cdstatus: null}));
//             }
//         }
//     }

//     txtAction() {
//         if (this.state.timer === null) {
//             if (this.state.n === 0) {
//                 return "Yeah stop to work, Time to take a break";
//             }
//             if (this.state.cdstatus === null) {
//                 // this.state.n === CountDowntimer &&
//                 return "Click to Start CountDown";
//             }
//             if (this.state.cdstatus !== null) {
//                 return "CountDown in PAUSE";
//             }
//         }
//         if (this.state.timer !== null) {
//             return "Concentration, it is working time";
//         }
//         return null;
//         //return this.state.timer ? "Concentration, it is working time" : "Yeah stop to work, Time to take a break";
//     }

//     // txtBtnAction() {
//     // if (this.state.timer !== null) {
//     //     console.log("Pause Before");
//     // }
//     // }

//     render() {
//         min = Math.round(Math.floor(this.state.n / 60));
//         sec = this.state.n % 60;
//         sec = sec.toString().padStart(2, "0");
//         // console.log(this.state.timer);
//         const addOneMin = this.addOneMin;
//         const btnActionToggle = this.btnActionToggle;
//         const btnReset = this.btnReset;
//         const removeOneMin = this.removeOneMin;
//         const btnWork = this.btnWork;
//         const btnBreak = this.btnBreak;
//         return (
//             <div>
//                 <button type={"button"} onClick={btnWork}>
//                     {"Work"}
//                 </button>
//                 <button type={"button"} onClick={btnBreak}>
//                     {"Break"}
//                 </button>
//                 {/* <div>{this.txtBtnAction()}</div> */}
//                 {"Valeur : "}
//                 {min}
//                 {":"}
//                 {sec}
//                 <button type={"button"} onClick={addOneMin}>
//                     {" + 1 Min "}
//                 </button>
//                 <button type={"button"} onClick={btnActionToggle}>
//                     {this.btnActionLabel()}
//                 </button>
//                 <button type={"button"} onClick={btnReset}>
//                     {" Reset "}
//                 </button>
//                 <button type={"button"} onClick={removeOneMin}>
//                     {" - 1 Min "}
//                 </button>
//                 <div>{this.txtAction()}</div>
//             </div>
//         );
//     }
// }

// Incrementer.defaultProps = {
//     start: CountDowntimer,
//     step: -1,
// };

// module.exports = Incrementer;
