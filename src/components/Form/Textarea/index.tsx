'use client';

import css from "./style.module.scss";

import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

import Select from '@/components/Form/Select/Ghost'
import Label from '@/components/Form/Label'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label?: string

  onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

const Textarea = ({name, label, ...props}: Props) => {
  const [value, setValue] = useState(props.value || '')
  
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
    if (props.onInput) props.onInput(e)
  }

  return (
    <div className={css["root"]}>
      { label && <Label { ...props }  name={name}> { label } </Label> }
      <div className={`${props.className} ${css["textarea-box"]}`}>
        <div className={css["content"]}>
          <textarea 
            {...props} 
            name={name} 
            value={value} 
            className={css["textarea"]} 
            onInput={handleInput}
          />
        </div>
      </div>
    </div>
  );
}

export default Textarea;