import { Component } from "react";


class CounterBoard extends Component {
    render(){
        const {count} = this.props
        return (

            <h1>{count}</h1>
        )
    }
}


export default CounterBoard