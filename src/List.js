import React, { Component } from 'react'
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class User extends Component {

    state = {
        users:[],
        getId:"",
        name:"",
        gender:"",
        account_no:"",
        balance:"",
        accounttype:"",
        email:""
    }
 
    componentDidMount()
    {
        axios.get('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/').then(response =>
        {
            console.log(response)
            this.setState({
                users: response.data
            })
            // console.log(this.state.users[0].name)
        })
    }
    
    update = (getUser) => {
    
        this.setState((state)=>(
            {
                getId:getUser.id,
                name:getUser.name,
                gender:getUser.gender,
                account_no:getUser.account_no,
                balance:getUser.balance,
                accounttype:getUser.accounttype,
                email:getUser.email
            }
        ))
    }
    onDeleteEmpRecord(empID) {
        alert(empID);
        axios.delete('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/' + empID + '/', {
            empId: empID,
        }).then(response => {
            console.log("Data:", response);
        })
        .catch(error => {
              console.log("Error:", error)
            })
    }
    onUpdateData(empID){
        alert(empID);
        
    }

    render() {
        if(this.state.name !== "" && this.state.email !== "")
        {
          //  console.log(this.state.name);
            return <Redirect to={{
            pathname: "/Update",
            state: { 
                getId:this.state.getId,
                name: this.state.name ,
                gender:this.state.gender,
                account_no:this.state.account_no,
                balance:this.state.balance,
                accounttype:this.state.accounttype,
                email:this.state.email,
            }
          }}
        />
        }
        return (
            <div style={{textAlign: 'center'}}>
                        {/* <Link to='/Home'
                         style={{backgroundColor:'#ffc107',float:'left',margin:'1rem',marginTop:'1rem',padding:'7px',borderRadius:'5px', fontSize:'1.5rem',color:'black' }}>
                    Back
                </Link> */}
                <h1>User Details</h1>
                <Table  responsive >
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Gender</th>
                        <th> Account No </th>
                        <th> Balance</th>
                        <th> AccountType </th>
                        <th colSpan='2'> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((emp) =>
                     
                     <tr key={emp.id}>
                         <td> {emp.id} </td>
                         <td> {emp.name}</td>
                         <td> {emp.email}</td>
                         <td> {emp.gender}</td>
                         <td> {emp.account_no}</td>
                         <td> {emp.balance}</td>
                         <td> {emp.accounttype}</td>
                         {<td><Button variant="danger"
                                    onClick={() => this.onDeleteEmpRecord(emp.id)}>Delete</Button></td>}
                                
                         {<td> <Button variant="info"
                               onClick={()=> this.update(emp)}>Update</Button></td>}
                         
                     </tr>
                    
                    )}
                </tbody>
              
                </Table>
            </div>
        )
    }
}
