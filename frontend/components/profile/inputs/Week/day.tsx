import css from "./input.module.scss";

interface InputDayProps {
    label: number
    value: number,
    onChange: (value: number) => void
}

function Day(props: InputDayProps) {
    const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
    return (
        <div className={css["day"]}>
            <label className="text-center" htmlFor={days[props.label]}>
                { days[props.label] }
            </label>
            <input
                name={days[props.label]}
                type="number" 
                value={props.value}
                onChange={(event) => props.onChange(parseInt(event.currentTarget.value))}
                min={0}
                max={24}
            />
        </div>
    )
}

export default Day;