import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstname, setFirst] = useState ("")
  const [middlename, setMiddle] = useState ("")
  const [surname, setSurname] = useState ("")
  const [course, setCourse] = useState ("")

  
  

function handleFirst(e) {
  setFirst(e.target.value)
}

function handleMiddle(e) {
  setMiddle(e.target.value)
}

function handleSurname(e) {
  setSurname(e.target.value)
}


function handleCourse(e) {
  setCourse(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault()
  setFirst("")
  setMiddle("")
  setSurname("")
  setCourse("")
}

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} >
        <input name="firstname" type="text" placeholder="First Name" value={firstname}  onChange = {(e) => handleFirst(e)} />
        <input name="middlename" type="text" placeholder="Middle Name" value={middlename}  onChange = {(e) => handleMiddle(e)} />
        <input name="surname" type="text" placeholder="Surname" value={surname}  onChange = {(e) => handleSurname(e)} />
        <input name="course" type="text" placeholder="Course" value={course}  onChange = {(e) => handleCourse(e)} />
        <input type="submit" />
      </form>
    </div>
  )
}



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { first: "", middle: "", surname: "", course: "" };
//   }

//   handleFirst(e) {
//     this.setState({first: e.target.value})
//   }

//   handleMiddle(e) {
//     this.setState({middle: e.target.value})
//   }

//   handleSurname(e) {
//     this.setState({surname: e.target.value})
//   }

//   handleCourse(e) {
//     this.setState({course: e.target.value})
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     this.setState({first: "", middle: "", surname: "", course: ""})
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={(e) => this.handleSubmit(e)}>
//           <input name="first" type="text" value={this.state.first} placeholder="First Name" onChange={(e) => this.handleFirst(e)} />
//           <input name="middle" type="text" value={this.state.middle} placeholder="Middle Name" onChange={(e) => this.handleMiddle(e)} />
//           <input name="surname" type="text" value={this.state.surname} placeholder="Surname" onChange={(e) => this.handleSurname(e)} />
//           <input name="" type="text" value={this.state.course} placeholder="Course" onChange={(e) => this.handleCourse(e)} />
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }


export default App;
