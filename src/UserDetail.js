import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Tab } from 'react-bootstrap';
//npm install react-axios
//npm install react-axios --force
export default class UserDetail extends Component {

    state={
        users:[]
    }
    
    componentDidMount()
    {
       console.log("Hello Shivani")
       axios.get('http://jsonplaceholder.typicode.com/users').then(response =>
       {
           console.log(response)
           this.setState({
               users:response.data
           })
           console.log(this.state.users[0].name)
       })
    }

    render() {
        return (
            <div>
                <h1>User Details</h1>
                <Table border='1px solid black' responsive style={
                    {
                        borderCollapse:'collapse'
                    }
                }>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>UserName</th>
                            <th>City</th>
                            <th>ZipCode</th>
                            <th>Company</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) =>
                          <tr>
                              <td> {user.id} </td>
                              <td> {user.name} </td>
                              <td> {user.email} </td>
                              <td> {user.username}</td>
                              <td> {user.address.city}</td>
                              <td> {user.address.zipcode}</td>
                              <td> {user.company.name}</td>
                              <td> {user.address.geo.lat}</td>
                              <td> {user.address.geo.lng}</td>
                          </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}
