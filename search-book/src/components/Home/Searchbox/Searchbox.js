import React, { useEffect, useState, useCallback } from "react";
import { searchbook } from "../../../apis/searchbook";
import "./Searchbox.css";
import _ from "lodash"
import { useDispatch } from "react-redux";
import { updateKeyword } from "../../../redux/slices/searchbookSlice";

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
    const [suggestions, setSuggestions] = useState([]);
    const [showAutocomplete, setShowAutocomplete] = useState(false);

    const cachedDebouncedFn = useCallback(_.debounce((input) => {
        if (input.trim() === "") return;
        searchbook(input, 1, 10).then(res => {
            setSuggestions(res?.data?.items || []);
        })
    }, 500), []);

    useEffect(() => {
        if (showAutocomplete) {
            cachedDebouncedFn(input);
        }
    }, [input, showAutocomplete])

    const handleChange = (e) => {
        if (e.target.value.trim() === "") {
            setShowAutocomplete(false)
        } else {
            setShowAutocomplete(true);
        }
        setInput(prev => {
            return e.target.value
        });// async
    }
    const handleClickSubmit = (e) => {
        e.preventDefault();
        //handleSubmit(input);
        dispatch(updateKeyword(input))
    }

    const handleBlur = () => {
        setShowAutocomplete(false)
    }
    const handleFocus = () => {
        setShowAutocomplete(true)
    }

    const handleClickSuggestion = (title) => {
        dispatch(updateKeyword(title));
        setInput(title)
    }

    return (
        <form className="searchbook-form">
            <div className="auto-complete__container">
                <input value={input} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} />
                {showAutocomplete &&
                    <div className="auto-complete__suggestion">
                        <ul>
                            {
                                suggestions.map(item => {
                                    return (
                                        <li key={item.id} onMouseDown={() => handleClickSuggestion(item?.volumeInfo?.title || "")}>
                                            {item?.volumeInfo?.title || ""}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>}
            </div>

            <button onClick={handleClickSubmit}>submit</button>
        </form>
    )
}

export default Searchbox