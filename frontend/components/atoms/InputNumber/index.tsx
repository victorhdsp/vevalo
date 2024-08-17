import css from "./input.module.scss";
import { InputProps } from "@/components/ui/input"
import InputIncrementalNumber from "./input";

interface IncrementalNumberProps extends InputProps{
    label: string
    valueModifier?: number
}

function IncrementalNumber(props:IncrementalNumberProps) {

    return (
        <div className={css["root"]}>
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <InputIncrementalNumber 
                valueModifier={props.valueModifier} 
                {...props}
            />
        </div>
    )
}

export default IncrementalNumber;