import Car from "./Car";
import { v4 as uuidv4 } from "uuid";
import { Component, Fragment } from "react";
import SellButton from "./SellButton";

//uuid:universal unique id, guid:glabally unique id
//Fragment
//key props(attr) for mapping jsx

//var will only hoist decaration not initilization
// var obj; //declaration
// obj.a = 3;
// obj = { a: 1, b: 2 }; //initilization

/* immutability: 
        const obj = {a:1,b:2}; obj.a = 3 (mutably);
        const newObj = {...obj}; newObj.a = 3; (immutably);
    spread operator(shallow): will create a new reference, but anything inside is still the same as original
    rerender: change of props, change of state, forceUpdate, parent render
    PureComponent: shallow comparison
    shouldComponentUpdate: performance optimization, prevent unnecessary rendering
    deep-copy: JSON.parse(JSON.stringify(obj))(cheating)
    how to update state immutably
    why to update state immutably: think of the example that mutate the original state will cause unpredictable issue
    map in jsx: why we need key for map()
*/

class CarsApp extends Component {
  state = {
    cars: [
      { id: uuidv4(), make: "Toyota", number: 10 },
      { id: uuidv4(), make: "Honda", number: 8 },
      { id: uuidv4(), make: "Ford", number: 12 },
    ],
  };

  handleSellCar = (index) => {
    // /* -----------------------without callback-------------------- */
    // //console.log("handleSellCar", index)
    // const nextState = { ...this.state }; //spread only do shallow copy
    // //console.log(nextState.cars === this.state.cars);//true
    // nextState.cars = [...this.state.cars];
    // //console.log(nextState.cars === this.state.cars);
    // nextState.cars[index] = { ...this.state.cars[index] };
    // //console.log(nextState.cars[index]=== this.state.cars[index]);
    // nextState.cars[index].number = this.state.cars[index].number - 1; //immutable
    // this.setState(nextState);

    this.setState({     //I figure out that this also works, think of why?
      ...this.state,
      cars: [
        ...this.state.cars.slice(0, index),
        {
          ...this.state.cars[index],
          number: this.state.cars[index].number - 1,
        },
        ...this.state.cars.slice(index + 1),
      ],
    });

    /* ------------------------with callback------------------- */
    // this.setState(prev => {
    //     const nextState = {...prev};//spread only do shallow copy
    //     //console.log(nextState.cars === prev.cars);//true
    //     nextState.cars = [...prev.cars]
    //     //console.log(nextState.cars === prev.cars);

    //     nextState.cars[index] = {...prev.cars[index]};
    //     //console.log(nextState.cars[index]=== prev.cars[index]);
    //     nextState.cars[index].number = prev.cars[index].number - 1;//immutable
    //     return nextState;

    /*  this.state.cars[index].number = this.state.cars[index].number - 1;//mutably
         this.setState(this.state); */
  };

  render() {
    return (
      <>
        <div>
          {this.state.cars.map((car, index) => {
            return <Car key={car.id} carData={car} />;
          })}
        </div>
        <div>
          {this.state.cars.map((car, index) => {
            return (
              <SellButton
                key={car.id}
                make={car.make}
                handleSellCar={() => {
                  this.handleSellCar(index);
                }}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default CarsApp;
