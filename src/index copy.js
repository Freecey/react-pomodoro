// import React from 'react';
// import ReactDOM from 'react-dom';

// let min = 5
// let sec = 0
// let workTime = 60*25
// let breakTime = 60*5

// // window.setInterval(() => {
// //     n--
// //     min = n / 60
// //     sec = n % 60
// //     render()
// // }, 1000)

// class Welcome extends React.Component {

//     render () {
//         return <div>
//             <h1>Hello {this.props.name}</h1>
//             <p>
//                 {this.props.children}
//             </p>
//         </div>
//     }

// }

// class Clock extends React.Component {

//     constructor (props) {
//         super(props)
//         this.state = {date: new Date()}
//         this.timer = null
//     }

//     componentDidMount () {
//         this.timer = window.setInterval(this.tick.bind(this), 1000)
//     }

//     componentwillUnmount () {
//         window.clearInterval(this.timer)
//     }

//     tick () {
//         this.setState({date: new Date()})
//     }

//     render () {
//         return <div>
//             Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
//         </div>
//     }

// }

// class Incrementer extends React.Component {

//     constructor (props) {
//         super(props)
//         this.state = {n: props.start, timer: null}
//     }

//     componentDidMount () {
//         this.start()
//     }

//     componentwillUnmount () {
//         this.pause()
//     }

//     increment () {
//         this.setState((state, props) => ({n: state.n + props.step}))
//     }

//     pause () {
//         window.clearInterval(this.state.timer)
//         this.state({
//             timer: null
//         })
//     }

//     start () {
//         this.state({
//             timer: window.clearInterval(this.increment.bind(this), 1000)
//         })
//     }

//     render () {
//         min = Math.round(Math.floor(this.state.n/ 60))
//         sec = this.state.n%60
//         sec = sec.toString().padStart(2, '0')
//         return <div>Valeur : {min}:{sec}
//         <button onClick={this.pause.bind(this)}>Pause</button>
//         </div>
//     }

// }

// Incrementer.defaultProps = {
//     start: 0,
//     step: -1
// }

// // class ManualIncrementer extends React.Component {
// //     constructor (props){
// //         super(props)
// //         this.state = {n: 0}
// //     }
// //     increment (e) {
// //         e.preventDefault()
// //         this.setState((state, props) => ({n: state.n + 60}))
// //     }

// //     render (){
// //         return <div>Valeur : {this.state.n} <button onClick={this.increment.bind(this)}> + 1 Min </button></div>
// //     }
// // }

// function Home () {
//     return <div>
//         <Welcome name="World" />
//         <Clock/>
//         <Incrementer start={workTime}/>
//     </div>
// }

// ReactDOM.render(<Home/>, document.querySelector('#app'))
