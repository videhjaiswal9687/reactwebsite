import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//function component (Stateless Component)
function Student(props)
{
   return (
     <div>
       <h3>Student Name:{props.name}</h3>
       <h3>Student Age:{props.age}</h3>
       <h3>Student Course:{props.course}</h3>
       <h3>Student Fees:{props.fees}</h3>
     </div>
   )
}
//class component (StateFull Component)
class Teacher extends React.Component
{
  render()
  {
    return (
      <div>
        <h3>Teacher Name:{this.props.name}</h3>
        <h3>Teacher Age:{this.props.age}</h3>
        <h3>Teacher Qualification:{this.props.qualification}</h3>
        <h3>Teacher Subject:{this.props.subject}</h3>
        <hr></hr>
        <Student name=" Rahul Sharma" age="23" course="MBA" fees="42000.0" />
      </div>
    )
  }
}
// const element = <Student name="Shivani Patil" age="21" course="B.Tech" fees="56000.0"/>

const element = <Teacher name="Neha Sharma" age="22" qualification="PhD" subject="Maths"/> 

// ReactDOM.render(element,document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
