import { Component } from "react";
import CounterBoard from "./CounterBoard";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

//react has unidirectional data flow
//react only allow passing data from parent to child directly, not passing from child to parent or between sibling
//state lifting(above)
//coontroled component

class CounterApp extends Component {
    state = { count: 0 };

    handleIncrement = () => {
        this.setState({count:this.state.count + 1})
    }

    handleDecrement = () => {
        this.setState({count:this.state.count - 1})
    }

    render(){
        return (
            <div>
                <div style={{ display: "inline-block", backgroundColor: "lightgreen", padding: "10px" }}>
                    <CounterBoard count={this.state.count}/> {/* this component needs count to display */}
                </div>
                <div>
                    <IncrementButton handleIncrement={this.handleIncrement}/> {/* this component needs to update(increment) the count */}
                    <DecrementButton handleDecrement={this.handleDecrement}/> {/* this component needs to update(decrement) the count */}
                </div>
            </div>
        )
    }
}


export default CounterApp