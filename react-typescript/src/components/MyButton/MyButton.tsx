import React, { FC, MouseEvent, ReactNode, useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";

type ButtonVariant = "contained" | "outlined" | "text"

type ButtonSize = "small" | "medium" | "large";

type ButtonColor = "primary" | "secondary" | "default";

interface IButtonProps {
    color?: ButtonColor;
    size?: ButtonSize;
    variant?: ButtonVariant;
    children?: ReactNode;
    disabled?:boolean;
    onClick?:()=>void
}

interface IClickPosition {
    x:number;
    y:number;
}

const MyButton: FC<IButtonProps> = ({
    color="primary",
    size="medium",
    variant="contained",
    disabled=false,
    onClick,
    children=<></>
}) => {
    const [clickPosition, setClickPosition] = useState<IClickPosition|null>(null);
    const [rippleArr, setRippleArr] = useState<ReactNode[]>([]);
    const handleClick = (e:MouseEvent) => {

        if(!disabled){
            const {offsetX,offsetY} = e.nativeEvent;
            setClickPosition({x:offsetX,y:offsetY});
            onClick?.();
        }
        
    }

    useEffect(() => {
        if(clickPosition !== null){
            const newRipple = (
                <div
                    data-testid="ripple-element"
                    key={uuidv4()}
                    style={{
                        position:"absolute",
                        left:clickPosition.x,
                        top:clickPosition.y,
                        borderRadius:"50%",
                        transform:"translate(-50%,-50%)"
                    }}
                    className={`btn-ripple btn-ripple-${variant}`}
                    onAnimationEnd={()=>{
                        console.log("animationend");
                        setRippleArr(prev=>{
                            let nextRippleArr = [...prev];
                            nextRippleArr.pop();
                            return nextRippleArr
                        })
                    }}
                >
                </div>
            )
            setRippleArr(prev=>[newRipple,...prev]);
        }
    },[clickPosition]);

    console.log("rippleArr",rippleArr)

    const composeClassName = () => {
        const colorVariantCls = `btn-${color}-${variant}`;
        const sizeCls = `btn-${size}`;
        const disabledCls = disabled?`btn-disabled`:"";
        return ["btn",colorVariantCls,sizeCls,disabledCls].join(" ");
    }
    return (
        <>
            <button className={composeClassName()} onClick={handleClick} disabled={disabled}>
                <span>{children}</span>{rippleArr}
            </button>
        </>
    )
}


export default MyButton