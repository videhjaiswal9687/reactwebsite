/*

Constructor is a method used to initialize an object's state in a class.
It automatically called during the creation of an object in a class.

1.) It used for initializing the local state of the component by assigning an object to this.state.

2.) It used for binding event handler methods that occur in our component.

We need to call super(props) method before any other statement, if we do not call super(props) method, then this.props well be undefined in the constructor.

If the component needs to use local state , we need directly to use this.state to assign the initial state in the constructor but to change state we have to use setState() method

*/

import React, { Component } from 'react'

export default class ConstructorDemo extends Component 
{
    constructor(props) 
    {
        super(props)
    
        this.state = {
             count: this.props.count,
             name:this.props.name,
             result:this.props.result,
             salary:10000.0
        }
        this.stateHandling = this.stateHandling.bind(this)
    }
    //don't use like this
    // updateCounter = () =>
    // {
    //     //modify state
    //     this.setState(
    //         {
    //             count:this.state.count+1
    //         }
    //     )
    // }
    
    updateCounter = () =>
    {
        //get previous state
        this.setState((state) =>(
            {
               count: state.count + 1,
               name: state.name + " " + "Videh Jaiswal",
               result: state.result.concat(state.result),
               salary: state.salary + 1000.0
            }
          )
        ) 
    }

    stateHandling()
    {
        this.updateCounter()
    }
    
    render() 
    {
        const result1 = this.state.result.map(
            (marks) => 
        <li><b>{marks}</b></li>
        )

        return (
            <div align="center">
                <h2>Counter</h2>
                <button onClick={this.stateHandling}>Click me </button>
                <h2>{this.state.count}</h2>
                <h2>{this.state.name}</h2>
                <h2>{this.state.salary}</h2>
        {/* <h2> Marks Obtained:{result1}</h2> */}
            </div>
        )
    }
}
