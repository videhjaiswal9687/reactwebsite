import React, { Component } from 'react'
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
export default class EmployeeList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             empList:[]
        }
    }

    componentDidMount()
    {
       this.getEmpList()
    }

    getEmpList()
    {
        axios.get("http://localhost:8081/EmployeeRecord/ListAllEmployee").then(response => {
            // console.log(response)
            // console.log(response.data.data)
            let list=response.data.data
            this.setState({
                empList:list
            })
            // console.log(this.state.empList[0])
        })
    }
    
    render() {
        return (
            <div>
                <Table responsive border='1px solid black'>
                       <thead>
                           <tr>
                               <th colSpan='5' bgcolor='navyblue'><h1 align="center" style={{color:'white'}}>Employee List</h1></th>
                           </tr>
                           <tr>
                               <th>Name</th>
                               <th>Salary</th>
                               <th>Depart</th>
                               <th>Email</th>
                           </tr>
                       </thead>
                       <tbody>
                           { 
                            this.state.empList.map((emp) =>
                                <tr key={emp.empId}>
                                    <td>{emp.empName}</td>
                                    <td>{emp.empSalary}</td>
                                    <td>{emp.empDepart}</td>
                                    <td>{emp.empEmail}</td>
                                </tr>
                            )
                           }
                           
                       </tbody>
                </Table>
            </div>
        )
    }
}
