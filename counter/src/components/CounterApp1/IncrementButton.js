import { Component } from "react";


class IncrementButton extends Component {
    render(){
        const {handleIncrement} = this.props
        return (
            <button onClick={handleIncrement} style={{backgroundColor:"lightBlue"}}>increment</button>
        )
    }
}


export default IncrementButton