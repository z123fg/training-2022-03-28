const { Component } = require("react");


class SellButton extends Component {

    render(){

        const {make, handleSellCar} = this.props
        return (
            <button onClick={handleSellCar} style={{margin:"30px"}}>{`sell ${make}`}</button>
        )
    }
}

export default SellButton;