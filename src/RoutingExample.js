import React from 'react';
import { BrowserRouter as Router , Route, Link, Switch, Redirect} from 'react-router-dom';
import ContactForm from './ContactForm';
//npm install react-router-dom

function RoutingExample()
{
    return(
        <div>
            <Router>
                <div>
                    <Header />
                    <hr></hr>
                    <Switch>
                      <Route exact path='/' component={Home}></Route>
                      <Route  path='/service' component={Service}></Route>
                      <Route  path='/about' component={About}></Route>
                      <Route  path='/contactform' component={ContactForm}></Route>
                      <Route path='/users' component={Users}/>
                      <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

function Home()
{
    return (
        <div>
            <h1>Home </h1>
            <p> This is a Home Component !!!!!</p>
        </div>
    )
}

function About()
{
    return (
        <div>
            <h1>About </h1>
            <p> This is a About Component !!!!!</p>
        </div>
    )
}

function Service()
{
    return (
        <div>
            <h1>Service</h1>
            <p> This is a Service Component</p>
        </div>
    )
}

function NoMatch()
{
    return (
        <div>
            <h1> 404 error</h1>
            <p>
                Oops, Page not Found!!!
            </p>
        </div>
    )
}

function Users({match})
{
    console.log(match)
    // console.log(location)
    // console.log(history)
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${match.url}/1`}>Shivani Patil</Link>
                </li>
                <li>
                    <Link to={`${match.url}/2`}>Neha Kumari</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:id`} component={User}/>
            </Switch>
        </div>
    )
}

function User({match})
{
    return (
        <div>
            <h1>User Detail</h1>
            <p>User Id:{match.params.id}</p>
            {(parseInt(match.params.id)===3)?(<Redirect to='/users'/>):""}
        </div>
    )
}

function Header()
{
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to={{pathname:'/service'}}>Service</Link>
                </li>
                <li>
                    <Link to={{pathname:'/about'}}>About</Link>
                </li>
                <li>
                    <Link to='/contactform'>Contact</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
            </ul>
        </div>
    )
}

export default RoutingExample;