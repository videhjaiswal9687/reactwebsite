import React, { Component } from 'react'

export default class ContactForm extends Component {

    constructor(props) {
        super(props)
    
        this.initailState = {
            name:"",
            email:"",
            city:"",
            message:"",
            gender:"",
            education:""
        }
        this.state = this.initailState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
       const name = event.target.name;
       const value = event.target.value;
       this.setState({
           //computed property syntax
           [name]:value
       })
    }

    handleSubmit(event)
    {
        // preventDefault is called on the event when submitting the form 
        // to prevent a browser reload/refresh
        event.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);
        this.setState(this.initailState);
    }
    
    render() {
        return (
            <div>
                <h1>Contact Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Name:<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        Email:<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div>
                        Gender:<input type="radio" name="gender" value="male" onChange={this.handleChange}/>Male
                        <input type="radio" name="gender" value="female" onChange={this.handleChange}/>Female
                        <input type="radio" name="gender" value="other" onChange={this.handleChange}/>Other
                    </div>
                    <div>
                        Education:<input type="checkbox" name="education" value
                        ="graduate" onChange={this.handleChange}/>Graduate
                        <input type="checkbox" name="education" value
                        ="postgraduate" onChange={this.handleChange}/>PostGraduate
                        <input type="checkbox" name="education" value
                        ="PhD" onChange={this.handleChange}/>PhD
                    </div>
                    <div>
                        City:
                        <select name="city" value={this.state.city} onChange={this.handleChange}>
                            <option value="">Select City...</option>
                            <option value="New Delhi">New Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkatta">Kolkatta</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                    </div>
                    <div>
                        Message:
                        <textarea name="message" value={this.state.message} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
