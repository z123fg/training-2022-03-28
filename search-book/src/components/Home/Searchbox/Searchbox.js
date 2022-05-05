import React,{useEffect, useState, useCallback} from "react";
import { searchbook } from "../../../apis/searchbook";
import "./Searchbox.css";
import _ from "lodash"
import { useDispatch } from "react-redux";
import { updateCurrentPage, updateKeyword } from "../../../redux/slices/searchbookSlice";

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
const Searchbox = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const cachedDebouncedFn = useCallback(_.debounce((input)=>{
        dispatch(updateKeyword(input));
        dispatch(updateCurrentPage(1));
    },2000),[dispatch]);
    

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
        //handleSubmit(input);
        dispatch(updateKeyword(input));
        dispatch(updateCurrentPage(1));
    }
   
    return (
        <form className="searchbook-form">
            <input value={input} onChange={handleChange}/>
            <button onClick={handleClick}>submit</button>
        </form>
    )
}

export default Searchbox