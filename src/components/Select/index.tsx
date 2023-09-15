import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export type InternSelectionEvent = {
    target: {
        name: string;
        value: string;
    }
}

interface SelectProps {
    placeholder: string;
    name: string;
    options: { value: string, label: string }[];
    onChange: (event: InternSelectionEvent) => void;
    value?: string;
}

function InternSelect({ placeholder, value, options, onChange, name }: SelectProps) {

    const handleOnChange = (value: string) => {
      if (onChange) onChange({ target: { name, value } });
    }

    return (
        <Label className="flex flex-col p-1 rounded-md bg-muted relative">
            <div className="text-xs font-semibold">{placeholder}</div>
            <Select value={value} onValueChange={(e) => handleOnChange(e)}>
                <SelectTrigger className="flex-1 border-0 border-b text-sm">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                      <SelectItem className='text-sm' key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </Label>
    )    
}

export default InternSelect