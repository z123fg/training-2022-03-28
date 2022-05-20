import React, { FC, MouseEvent, ReactNode } from "react";

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

const MyButton: FC<IButtonProps> = ({
    color="primary",
    size="medium",
    variant="contained",
    disabled=false,
    onClick,
    children=<></>
}) => {

    const handleClick = (e:MouseEvent) => {
        onClick?.();
    }

    const composeClassName = () => {
        const colorVariantCls = `btn-${color}-${variant}`;
        const sizeCls = `btn-${size}`;
        const disabledCls = disabled?`btn-disabled`:"";
        return ["btn",colorVariantCls,sizeCls,disabledCls].join(" ");

    }
    return (
        <>
            <button className={composeClassName()} onClick={handleClick} disabled={disabled}>
                {children}
            </button>
        </>
    )
}


export default MyButton