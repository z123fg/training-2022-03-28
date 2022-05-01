import { Component, useEffect, useState } from "react";


const Child = (props) => {
    const [state, setState] = useState("123")

    useEffect(()=>{
        console.log(document.getElementById("child-container"))
    },[])
    useEffect(()=>{ //this is invoked after the component render
        console.log("age changed");
        return () => { //componentWillUnmount
            console.log(state);//invoked before the destroy of the component, it's after the remove of the dom elements
            console.log(document.getElementById("child-container"))
            console.log("willUnmount")
        }
    },[])

    return (
        <div id="child-container">
            <p>Child</p>
            <p>{props.data.name}</p>
            <p>{props.data.age}</p>
        </div>
    )
}

/* class Child extends Component {

    componentWillUnmount(){
        console.log(document.getElementById("child-container"))
    }
    render(){
        return(
            <div id="child-container">
            <p>Child</p>
            <p>{this.props.data.name}</p>
            <p>{this.props.data.age}</p>
        </div>
        )
    }
} */

export default Child;