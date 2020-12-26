import React, { Component } from 'react'
import axios from 'axios';
import { Button , Table } from 'react-bootstrap';
import { Redirect, Link} from 'react-router-dom';
export default class EmployeeLogin extends Component {

    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null)
        {
            loggedIn = false
        }
        this.initialState = {
            empEmail:"",
            empPassword:"",
            loggedIn
        }
        this.state = this.initialState;
        this.onhandleChange = this.onhandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onhandleChange(event)
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
      const { empEmail, empPassword } = this.state;
      console.log(this.state)
      let user = {
          empEmail:this.state.empEmail,
          empPassword:this.state.empPassword
      }
      axios.post("http://localhost:8081/EmployeeRecord/Login",user).then(response =>{
          console.log(response)
          console.log(response.data.data)
          let dict = response.data.data
          const empID = dict["empId"]
          localStorage.setItem("empId",empID)

          //logic
          if (empEmail === this.state.empEmail && empPassword === this.state.empPassword )
          {
              localStorage.setItem("token","loginCheck")
              this.setState({
                  loggedIn:true
              })
          }
      })
    }
    render() {
        if(this.state.loggedIn)
        {
            return <Redirect to='/home'></Redirect>
        }
        return (
            <div>
                <h2><marquee style={{color:'red'}}>Employee Login</marquee></h2>
                <form onSubmit={this.handleSubmit}>
                <Table responsive >
                  <thead>
                      <tr>
                          <th>Email:</th>
                          <td>
                              <div>
                                  <input type="text" name="empEmail" value={this.state.empEmail} onChange={this.onhandleChange} placeholder="Name" />
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <th>Password:</th>
                          <td>
                              <div>
                                  <input type="password" name="empPassword" value={this.state.empPassword} onChange={this.onhandleChange} placeholder="password" />
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>
                              <Button variant="secondary" type="Submit">
                                  Login
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
