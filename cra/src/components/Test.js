import { Component } from "react";



class Test extends Component {
    constructor(props) {
        super(props);
        /* console.log("constructor"); */
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        /* this.interval = setInterval(()=>{
            console.log("every 1 second")
        },1000);
        console.log("didMount") */
    }

    shouldComponentUpdate() {
       /*  console.log("shouldUpdate"); */
        return true;
    }
    componentDidUpdate() {
       /*  console.log("didUpdate") */
    }

    handleClick(){
        this.forceUpdate();
        //this.setState({counter:this.state.counter + 1 })
    }

    componentWillUnmount() {
        /* clearInterval(this.interval); */
    }
    render() {
        /* console.log("render"); */
        return (
            <>
                <div>test</div>
                <button onClick={this.handleClick}>click</button>
            </>

        )
    }
}


export default Test