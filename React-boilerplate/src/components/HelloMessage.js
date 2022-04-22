import React from "react"
import "./style.css"



{/* <div>Hello {this.props.name}</div> //not regular js syntax,jsx (javascript xml) */ }
class HelloMessage extends React.Component {

    render() {
        return  <div>Hello {this.props.name}</div>
    }
}

export default HelloMessage;

