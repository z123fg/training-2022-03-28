import React from "react";

//skewer, camel-case
//synthetic event: wrapper object of native browser event object, resolve the event compatibility issue
//never mutate the state,
//arrow function take this keyword from where it is defined, function takes this keyword from where it is invoked
class CounterApp extends React.Component {
    state = {
        count:0
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });

        /* this.setState(prev=>{
            const nextState = {...prev};
            nextState.count = nextState.count + 1;
            return nextState;
        }) */
    }

    handleDecrement = () => {  
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return (
            <div>
                <div style={{backgroundColor:"lightgreen",display:"inline-block",padding:"20px"}}>
                    <h1>{this.state.count}</h1> 
                </div>
                <div>
                    <button onClick={this.handleIncrement} style={{backgroundColor:"lightblue"}}>increment</button>
                    <button onClick={this.handleDecrement} style={{backgroundColor:"salmon"}}>decrement</button>
                </div>
            </div>
        )
    }
}

export default CounterApp;