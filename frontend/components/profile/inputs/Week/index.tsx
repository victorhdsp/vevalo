import css from "./input.module.scss";
import Week from "./week";

interface InputWeekProps {
    label: string
}

function InputWeek(props: InputWeekProps) {

    return (
        <div className={css["root"]}>
            <label>
                {props.label}
            </label>
            <Week />
        </div>
    )
}

export default InputWeek;