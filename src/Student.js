import React, { Component} from 'react';

//class component
export default class Student extends Component {
    render() {
        return (
            <div>
                <h3>Name:{this.props.student.name}</h3>
                <Course course={this.props.student.course}/>
                <Fee fee={this.props.student.fee} />
            </div>
        )
    }
}

//function component 
function Course(props)
{
    return (
        <div>
            <h3>
                Course:{props.course.name}
            </h3>
            <h3>
                Duration:{props.course.duration}
            </h3>
        </div>
    )
}

const Fee = (props) =>
{
    return (
        <div>
        <h4>
            Fee:{props.fee}
        </h4>
    </div>
    )
}