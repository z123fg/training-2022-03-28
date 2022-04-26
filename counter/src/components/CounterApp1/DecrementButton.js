import { Component } from "react";


class DecrementButton extends Component {
    
    render(){
        const {handleDecrement} = this.props
        return (
            <button onClick={handleDecrement} style={{backgroundColor:"salmon"}}>decrement</button>
        )
    }
}


export default DecrementButton