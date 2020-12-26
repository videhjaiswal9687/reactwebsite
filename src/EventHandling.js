import React, { Component } from 'react'

export default class EventHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isShow: true
        }
        this.showHideContent=this.showHideContent.bind(this)
    }
    // showHideContent()
    // {
    //     this.setState((state)=>(
    //         {
    //             isShow: !state.isShow
    //         }
    //     )),
    // }

    showHideContent = (name,rollno) =>
    (
        this.setState((state)=>(
            {
                isShow: !state.isShow
            }
        )),
        console.log(name,rollno)
    )
    
    render() {
        return (
            <div>
                {/* <button onClick={this.showHideContent.bind(this)} > {this.state.isShow ? 'Hide' : 'Show'} </button> */}
                {/* <button onClick={this.showHideContent} > {this.state.isShow ? 'Hide' : 'Show'} </button> */}
                <button onClick={() => this.showHideContent("Sumit",101)} > {this.state.isShow ? 'Hide' : 'Show'} </button>
                {this.state.isShow &&
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>}
            </div>
        )
    }
}
