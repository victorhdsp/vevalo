import css from "./input.module.scss";
import { useState } from "react";
import Day from "./day";

function Week() {
    const [days, setDays] = useState<number[]>([0,0,0,0,0,0,0])

    const handleChangeDay = (index:number, value:number) => {
        const newDays = days.map((_value, _index) => {
            return _index === index ? value : _value;
        })
        setDays(newDays)
    }

    return (
        <div className={css["week"]}>
            {days.map((day, index) => {
                return <Day
                    label={index}
                    key={"day_"+index}
                    value={day}
                    onChange={(value:number) => handleChangeDay(index, value)}
                />
            })}
        </div>
    )
}

export default Week;