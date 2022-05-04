import React,{useEffect, useState, useCallback} from "react";
import { searchbook } from "../../../apis/searchbook";
import "./Searchbox.css";
import _ from "lodash"

/* 
axios:
    help you to transform the data;
    cancel the request
    interceptor

debouncing(lodash):

throttling(lodash):

pagination(diy):

useCallback
useRef
useMemo


*/
const Searchbox = ({handleSubmit}) => {
    const [input, setInput] = useState("");
    const cachedDebouncedFn = useCallback(_.debounce(handleSubmit,2000),[handleSubmit]);

    useEffect(()=>{ //side effect
        if(input!==""){
           cachedDebouncedFn(input); 
        }
    },[input,cachedDebouncedFn]);

    const handleChange = async (e) => {
        setInput(prev=>{
            return e.target.value
        });// async
    }
    const handleClick = (e) => {
        e.preventDefault();
        handleSubmit(input);
    }
   
    return (
        <form className="searchbook-form">
            <input value={input} onChange={handleChange}/>
            <button onClick={handleClick}>submit</button>
        </form>
    )
}

export default Searchbox