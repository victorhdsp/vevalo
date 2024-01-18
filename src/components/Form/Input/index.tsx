'use client';

import css from "./style.module.scss";

import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

import Select from '@/components/Form/Select/Ghost'
import Label from '@/components/Form/Label'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string

  icon?: LucideIcon

  isMoney?: boolean
  isPercent?: boolean

  onInput?: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input = ({icon:Icon, name, label, ...props}: Props) => {
  const isFinance = []
  if (props.isMoney) isFinance.push({ label: 'BRL', value: 'money' })
  if (props.isPercent) isFinance.push({ label: '%', value: 'percent' })

  const [selected, setSelected] = useState(isFinance[0]?.value || '')
  const prefix = selected === 'money' && 'R$'
  
  const [value, setValue] = useState(props.value || '')
  
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    if (props.onInput) props.onInput(e)
  }

  return (
    <div className={css["root"]}>
      { label && <Label { ...props }  name={name}> { label } </Label> }
      <div className={`${props.className} ${css["input-box"]}`}>
        <div className={css["content"]}>
          { Icon && <Icon className={css["icon"]} /> }
          { prefix && <span className={css["prefix"]}>{ prefix }</span> }
          <input 
            type="text" 
            {...props} 
            name={name} 
            value={value} 
            className={css["input"]} 
            onInput={handleInput}
          />
        </div>
        {
          isFinance.length > 0 && (
            <div className={css["select-type"]}>
              <Select options={isFinance} defaultValue={isFinance[0].value} onValueChange={(value) => setSelected(value)}  />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Input;