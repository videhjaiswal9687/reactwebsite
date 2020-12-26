import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button} from 'react-bootstrap';

export default class EmployeeRegister extends Component {

    constructor(props) {
        super(props)
    
        this.initialState = {
            empName:"",
            empId:"",
            empSalary:"",
            empEmail:"",
            empPassword:"",
            empDepart:""
          }
          this.state = this.initialState;
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
       const name = event.target.name;
       const value = event.target.value;
       this.setState({
           //computed property syntax
           [name]:value
       })
    }
    handleSubmit(e)
    {
        e.preventDefault()
        console.log(this.state)
        let emp = {
            empName:this.state.empName,
            empId:this.state.empId,
            empSalary:this.state.empSalary,
            empEmail:this.state.empEmail,
            empPassword:this.state.empPassword,
            empDepart:this.state.empDepart
        }
        axios.post("http://localhost:8081/EmployeeRecord/Register",emp).then(response =>
        {
            console.log(response)
        })  
    }
    render() {
        return (
            <div>
                <h2 style={{color:'red'}}>Employee Registration</h2>
                <form align="center" onSubmit={this.handleSubmit}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Employee Name:</th>
                                <td>
                                    <input type="text" name="empName" value={this.state.empName} onChange={this.handleChange} placeholder="Name"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Employee Id:</th>
                                <td>
                                    <input type="text" name="empId" value={this.state.empId} onChange={this.handleChange} placeholder="Id"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Employee Salary:</th>
                                <td>
                                    <input type="text" name="empSalary" value={this.state.empSalary} onChange={this.handleChange} placeholder="Salary"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Employee Email:</th>
                                <td>
                                    <input type="text" name="empEmail" value={this.state.empEmail} onChange={this.handleChange} placeholder="Email"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Employee Password:</th>
                                <td>
                                    <input type="password" name="empPassword" value={this.state.empPassword} onChange={this.handleChange} placeholder="Password"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Employee Depart:</th>
                                <td>
                                   <select name="empDepart" value={this.state.empDepart} onChange={this.handleChange} placeholder="Select Department">
                                       <option>Select Department</option>
                                       <option value="IT">IT</option>
                                       <option value="HR">HR</option>
                                       <option value="Accounts">Accounts</option>
                                   </select>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Button variant="primary" type="submit">
                                        Register
                                    </Button>
                                </td>
                            </tr>
                        </thead>
                    </Table> 
                </form>
            </div>
        )
    }
}
