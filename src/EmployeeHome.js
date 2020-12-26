import React, { Component } from 'react'
import { Redirect, Link} from 'react-router-dom';
import EmployeeList from './EmployeeList';

export default class EmployeeHome extends Component {
    constructor(props) {
        super(props)
        const token=localStorage.getItem("token")
        let loggedIn = true
        if (token == null)
        { 
            loggedIn = false
        }
        this.state = {
             loggedIn
        }
    }
    
    render() {
        if(this.state.loggedIn === false)
        {
            return <Redirect to = '/home'/>
        }
        return (
            <div>
                <h1>This is a Home Page</h1>
                <Link to='/logout' style={{float:'right',marginRight:'40px'}}>Logout</Link>
                <Link to='/list' style={{textDecoration:'none'}}>
                    <h2>Employee List</h2>
                </Link>
            </div>
        )
    }
}
