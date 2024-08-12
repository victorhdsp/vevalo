import { Button } from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input"
import { Minus, Plus } from "lucide-react";
import { FormEvent, useState } from "react";

interface InputIncrementalNumberProps extends InputProps{
    valueModifier?: number
}

function InputIncrementalNumber(props:InputIncrementalNumberProps) {
    const valueModifier = props.valueModifier || 100
    let value = 0;
    if (typeof props.defaultValue === "number") value = props.defaultValue;
    if (typeof props.value === "number") value = props.value;
    const [currentValue, setCurrentValue] = useState<number>(value)

    function handleInput(event: FormEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;
        setCurrentValue(parseInt(value));
    }

    function changeValue(modifier:number) {
        if (currentValue + modifier >= 0) 
            setCurrentValue(currentValue + modifier)
    }

    return (
        <div className="grid grid-cols-[1fr,max-content,max-content] gap-2 items-center">
            <Input 
                {...props} 
                type="number" 
                value={currentValue}
                onInput={handleInput}
                min={0}
            />
            <Button 
                size="icon"
                onClick={() => changeValue(+valueModifier)}
                className="rounded-full"
                name="increase"
            >
                <Plus/>
            </Button>
            <Button 
                size="icon"
                onClick={() => changeValue(-valueModifier)}
                className="rounded-full"
                name="decrease"
            >
                <Minus/>
            </Button>
        </div>
    )
}

export default InputIncrementalNumber;