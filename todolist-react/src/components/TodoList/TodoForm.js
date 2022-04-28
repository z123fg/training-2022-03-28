import { Component } from "react";
import style from "./Todo.module.css";



class TodoForm extends Component {
    state = { value: "", isInvalid: false }; //two way binding, bind the value, and also the event, anti - pattern
    //don't use addeventlistener
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.trim() === "") {
            this.setState({ isInvalid: true })
        } else {
            const { onSubmit } = this.props;
            onSubmit(this.state.value);
            this.setState({ value: "" })
        }

    }

    componentDidUpdate() {
        if (this.state.isInvalid === true && this.state.value !== "") {
            this.setState({ isInvalid: false })
        }
    }

    handleBlur = () => {
        this.setState({ isInvalid: false })
    }

    render() {

        return (
            <form className={style['form__container']}>
                <div className={`${style['input-container']} ${this.state.isInvalid?style['input-container--alert']:""}`}>
                    <input onBlur={this.handleBlur} value={this.state.value} onChange={this.handleChange} />
                    <span>invalid input</span>
                </div>

                <button className={style['btn--primary']} onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }

}

export default TodoForm;