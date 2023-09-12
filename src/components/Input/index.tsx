import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useMemo, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    name: string;
}

function InternInput(props: InputProps) {
    const { type, placeholder, name } = props;

    const [value, setValue] = useState(props.value)
    useMemo(() => { setValue(props.value) }, [props.value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(value)
    }

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (value !== '') {
          props.onChange && props.onChange(e)
        }
    }

    return (
        <Label className="flex flex-col p-1 rounded-md bg-muted">
            <div className="text-xs font-semibold">{placeholder}</div>
            <Input 
              className="border-0 border-b text-sm" 
              required 
              min={1} 
              {...props} 
              type={type} 
              placeholder={placeholder} 
              name={name} 
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
            />
        </Label>
    )    
}

export default InternInput