// import logo from './logo.svg';
import './App.css';
// import JSXDemo from './JSXDemo';
import Student from './Student';
import ConstructorDemo from './ConstructorDemo';
import Product from './Product';
import ContactForm from './ContactForm';
import { Component } from 'react';
import EventHandling from './EventHandling';
import RoutingExample from './RoutingExample';
import BootstrapForm from './BootstrapForm';
import UserDetails from './UserDetail';
import JSXDemo from './JSXDemo';
import EmployeeRegister from './EmployeeRegister';
import EmployeeList from './EmployeeList';
import EmployeeLogin from './EmployeeLogin';
import EmployeeHome from './EmployeeHome';
import EmployeeLogOut from './EmployeeLogOut';
import List from './List';
import CustomerList from './CustomerList';
import Update from './Update';
import { BrowserRouter as Router , Route, Link, Switch, Redirect} from 'react-router-dom';


//json example
const stud1 = {
  name:"Prashant Sharma",
  course:{
    name:'B.Tech(CS)',
    duration:'4 years'
  },
  fee:'56000.0'
}
const stud2 = {
  name:"Neha Sharma",
  course:{
    name:'BCA',
    duration:'3 years'
  },
  fee:'34000.0'
}

const emp = {
  name:"Shivani Patil",
  empid:"101",
  department:"IT",
  salary:"32000.0",
}


// function App() 
// {
//   return (
//     <div className="App">
//     {/* <Student student={stud1} />
//     <hr></hr>
//     <Student student={stud2} /> */}
//     {/* <ConstructorDemo  count={10} name="Shivani Patil" result={[34,45,56,67,87]}/> */}
    
//     {/* <Product /> */}
//     <ContactForm />
//     </div>
//   );
// }

class App extends Component
{
   state = {
     fields:{}
   }

   onSubmit = (fields) => {
     this.setState({
       fields:fields
     })
   }
   render(){
     return (
       <div className="App">
         {/* <ContactForm onSubmit={this.onSubmit} />
         <h3>{JSON.stringify(this.state.fields)}</h3> */}
         {/* <EventHandling /> */}
         {/* <RoutingExample /> */}
         {/* <BootstrapForm /> */}
         {/* <UserDetails /> */}
         {/* <JSXDemo /> */}
         {/* <ConstructorDemo  count={10} name="Shivani Patil" result={[34,45,56,67,87]}/> */}
         {/* <EmployeeRegister /> */}
         {/* <EmployeeList /> */}
         <Router>
               <div>
                 <Switch>
                   <Route exact path='/home' component={EmployeeHome}/>
                   <Route exact path='/logout' component={EmployeeLogOut}/>
                   <Route exact path='/login' component={EmployeeLogin}/>
                   <Route exact path='/list' component={EmployeeList}/>
                 </Switch>
               </div>
               <EmployeeLogin />
         </Router>
         {/* <List /> */}
         {/* <Update /> */}
         {/* <CustomerList /> */}
       </div>
     )
   }
}

export default App;
