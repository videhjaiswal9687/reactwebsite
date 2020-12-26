import React, { Component } from 'react'
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


export default class CustomerList extends Component{


    constructor(props) {
        super(props)
    
        this.state = {
             cusList:[]
        }
    }

    componentDidMount()
    {
       this.getCusList()
    }

    getCusList()
    {
        // axios.get("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers").then(response=>
        // {
        //     let list=response.data
        //     this.setState({
        //         cusList:list
        //     }) 
        //     console.log(this.state.cusList)
        // }
        // )

        axios.get('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/').then(response =>
        {
            console.log(response)
            this.setState({
                users: response.data
            })
            // console.log(this.state.users[0].name)
        })
    }

    render()
    {
        return(

            <div>
                <Table responsive border='1px solid black'>
                       <thead>
                           <tr>
                               <th colSpan='10 ' bgcolor='navyblue'><h1 align="center" style={{color:'white'}}>Customer List</h1></th>
                           </tr>
                           <tr>
                               <th>id</th>
                               <th>name</th>
                               <th>account_no</th>
                               <th>balance</th>
                               <th>accounttype</th>
                               <th>pub_date</th>
                               <th>email</th>
                               <th>password</th>
                           </tr>
                       </thead>
                       <tbody>
                           { 
                            this.state.cusList.map((cust) =>
                                <tr>
                                    <td>{cust.id}</td>
                                    <td>{cust.name}</td>
                                    <td>{cust.account_no}</td>
                                    <td>{cust.accounttype}</td>
                                </tr>
                            )
                           }
                           
                       </tbody>
                </Table>
            </div>
        )
    }

}