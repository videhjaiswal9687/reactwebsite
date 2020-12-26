import React, { Component} from 'react';

/*
JSX stands for Javascript XML.
It allows us to write HTML in React.
It allows us to write HTML elements in Javascript and place them in the DOM.
without any createElement() or appendChild() methods
It converts HTML tags into react elements.
We are not required to use JSX , but JSX makes it easier to write React Application.
*/ 

// Without JSX
const element = React.createElement(
    'h1',
    {
        className: "test"
    },
    'React Without JSX'
)

// Use JSX
// const title = "Welcome to React JS Application "
const title = <h1>Welcome to React JS Application</h1>
const stu = (
    <table border='1px solid black'>
        <thead>
        <tr>
            <th>Name</th>
            <th>Rollno</th>
            <th>Course</th>
            <th>Fees</th>
        </tr>
        </thead>
        
        <tbody>
          <td>Rahul Sharma</td>
          <td>101</td>
          <td>BBA</td>
          <td>32000.0</td>
        </tbody>
    </table>
)
const list = (
    <ul>
        <li>Indore</li>
        <li>Ujjain</li>
        <li>Bhopal</li>
        <li>Ratlam</li>
    </ul>
)

function calcaulate(n1,n2)
{
    if(n1>n2)
    {
     return <h3 className="substract">{n1-n2}</h3>
    }
    else
    {
     return <h3 className="addition">{n1+n2}</h3>
    }
}

const displayMsg = () => (alert('Welcome to React tutorial !!!!'))

// Component within another Component
function Sample()
{
    return (
        <div>
            <h3>Adding Another Component</h3>
        </div>
    )
}

export default class JSXDemo extends Component {
    render() {
        return (
            <div>
                {stu}
                {element}
                {title}
                {list}
        <h3>Result is:{calcaulate(21,34)}</h3>
        <Sample />
        <button onClick={displayMsg}>Show</button>
            </div>
        )
    }
}
