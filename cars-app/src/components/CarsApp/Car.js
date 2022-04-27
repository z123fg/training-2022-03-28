const { Component, PureComponent } = require("react");


class Car extends PureComponent {

    componentDidUpdate(){
        const {carData:{make}} = this.props
        console.log(make, "updated")
    }
    //{id, make,number}
    // shouldComponentUpdate(nextProps, nextState){ //happen before update
        
    //     /* const {carData:{make,id, number}} = this.props
    //     const {carData:{make:nextMake,id:nextId, number:nextNumber}} = nextProps;
    //     console.log(number,nextNumber) */
    //     //console.log(this.props.carData.number, nextProps.carData.number);
    //     console.log(this.props,nextProps)
    //     if(this.props.carData === nextProps.carData) return false;
    //     return true;
    // }

    render() {
        const {carData:{make, number}} = this.props
        return (
            <div   style={{
                display: "inline-block",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "10px",
                margin: "20px",
                width: "100px",
                height: "100px"
            }}>
                <p>{make}</p>
                <p>{number}</p>
            </div>
        )
    }
}

export default Car;