import { Component, useEffect, useState } from "react";
import style from "./Todo.module.css";



const TodoForm = (props) => {
    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            setIsInvalid(true)
        } else {
            const { onSubmit } = props;
            onSubmit(value);
            setValue("")
        }

    }

   

    useEffect(()=>{
        if (isInvalid === true && value !== "") {
            setIsInvalid(false )
        }
    },[value,isInvalid])

    const handleBlur = () => {
        setIsInvalid(false);
    }

    return (
        <form className={style['form__container']}>
                <div className={`${style['input-container']} ${isInvalid?style['input-container--alert']:""}`}>
                    <input onBlur={handleBlur} value={value} onChange={handleChange} />
                    <span>invalid input</span>
                </div>

                <button className={style['btn--primary']} onClick={handleSubmit}>Submit</button>
            </form>
    )

}

export default TodoForm;