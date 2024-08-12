"use client";

import css from "./input.module.scss";
import { Input as _Input, InputProps as _InputProps } from "@/components/ui/input";

interface InputProps extends _InputProps {
    label: string
}

function Input(props: InputProps) {
    return (
        <div className={css["root"]}>
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <_Input
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    )
}

export default Input;