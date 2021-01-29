// import React from "react";
// import ReactDOM from "react-dom";

// let min = 5;
// let sec = 0;
// let workTime = 25;
// // let breakTime = 5;

// let CountDowntimer = 60 * workTime + 15; // +15 for testing

// class Welcome extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>
//                     {"Hello "}
//                     {this.props.name}
//                 </h1>
//                 <p>{this.props.children}</p>
//             </div>
//         );
//     }
// }

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//         this.timer = null;
//     }

//     componentDidMount() {
//         this.timer = window.setInterval(this.tick.bind(this), 1000);
//     }

//     componentWillUnmount() {
//         window.clearInterval(this.timer);
//     }

//     tick() {
//         this.setState({date: new Date()});
//     }

//     render() {
//         return (
//             <div>
//                 {"Il est "}
//                 {this.state.date.toLocaleDateString()}{" "}
//                 {this.state.date.toLocaleTimeString()}
//             </div>
//         );
//     }
// }

// class Incrementer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {n: props.start, timer: null};
//         this.addOneMin = this.addOneMin.bind(this);
//         this.btnActionToggle = this.btnActionToggle.bind(this);
//         this.btnReset = this.btnReset.bind(this);
//         this.removeOneMin = this.removeOneMin.bind(this);
//     }

//     componentDidMount() {
//         this.start();
//     }

//     componentWillUnmount() {
//         windows.clearInterval(this.state.timer);
//     }

//     increment() {
//         if (this.state.n === 0) {
//             console.log("Timer to break");
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
//             console.log("Pause Before");
//         }
//         // this.state.timer ? console.log('Pause Before') : this.setState((state, props) => ({n: state.n + 60}))
//     }

//     removeOneMin() {
//         // e.preventDefault()
//         if (this.state.timer === null && this.state.n > 60) {
//             this.setState((state) => ({n: state.n - 60}));
//         } else {
//             if (this.state.n > 60) {
//                 console.log("Pause Before");
//             } else {
//                 console.log("no negative timer");
//             }
//         }
//         //this.state.timer ? console.log('Pause Before') : this.setState((state, props) => ({n: state.n - 60}))
//     }

//     pause() {
//         window.clearInterval(this.state.timer);
//         this.setState({
//             timer: null,
//         });
//     }

//     start() {
//         window.clearInterval(this.state.timer);
//         this.setState({
//             timer: window.setInterval(this.increment.bind(this), 1000),
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
//             this.setState((state, props) => ({n: props.start}));
//         }
//     }

//     txtAction() {
//         if (this.state.timer === null) {
//             if (this.state.n === 0) {
//                 return "Yeah stop to work, Time to take a break";
//             } else {
//                 if (this.state.n === CountDowntimer) {
//                     return "Click to Start CountDown";
//                 } else {
//                     return "CountDown in PAUSE";
//                 }
//             }
//         }
//         if (this.state.timer !== null) {
//             return "Concentration, it is working time";
//         }
//         return null
//         //return this.state.timer ? "Concentration, it is working time" : "Yeah stop to work, Time to take a break";
//     }

//     render() {
//         min = Math.round(Math.floor(this.state.n / 60));
//         sec = this.state.n % 60;
//         sec = sec.toString().padStart(2, "0");
//         console.log(this.state.timer);
//         let addOneMin =this.addOneMin;
//         let btnActionToggle = this.btnActionToggle;
//         let btnReset = this.btnReset;
//         let removeOneMin = this.removeOneMin;
//         return (
//             <div>
//                 {"Valeur : "}
//                 {min}
//                 {":"}
//                 {sec}
//                 <button type="button" onClick={addOneMin}>
//                     {" + 1 Min "}
//                 </button>
//                 <button type="button" onClick={btnActionToggle}>
//                     {this.btnActionLabel()}
//                 </button>
//                 <button type="button" onClick={btnReset}>
//                     {" Reset "}
//                 </button>
//                 <button type="button" onClick={removeOneMin}>
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

// function Home() {
//     return (
//         <div>
//             <Welcome name="World" />
//             <Clock />
//             <Incrementer />
//         </div>
//     );
// }

// ReactDOM.render(<Home />, document.querySelector("#app"));
