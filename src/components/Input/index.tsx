'use client';

import css from "./style.module.scss";
import { useEffect, useState } from "react";

import Select from "@/components/Select/Ghost"
import Label from '@/components/Label'
import { LucideIcon } from "lucide-react";

interface Props {
  label?: string;
  help?: string;
  
  name: string;
  type?: 'text' | 'money' | 'number' | 'email' | 'password' | 'tel' | 'percent';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;

  value?: string
  defaultValue?: string

  onInput?: (value: string) => void

  isMoney?: boolean
  isPercent?: boolean

  icon?: LucideIcon
  className?: string
}

const Input = ({icon: Icon, ...props}: Props) => {
  const selectConfig = { 
    width: '3.5rem', 
    disabled: props.disabled 
  }

  const selectOptions = []

  const type = props.isMoney || props.isPercent ? 'number' : props.type || 'text'
  props.isMoney && selectOptions.push({ value: 'money', label: 'BRL' })
  props.isPercent && selectOptions.push({ value: 'percent', label: '%' })

  const [value, setValue] = useState(props.value || props.defaultValue || '')
  
  let contextDefaultValue = props.defaultValue
  let DefaultValueIsPercent = props.isPercent && contextDefaultValue?.includes('%')
  
  let contextSelectedType = selectOptions.length > 0 ? selectOptions[0]?.value: ''

  if (DefaultValueIsPercent)  {
    contextDefaultValue = contextDefaultValue?.replace('%', '')
    contextSelectedType = 'percent'
  }
  
  const [selectedType, setSelectedType] = useState<string>(contextSelectedType || type)

  useEffect(() => {
    let contextValue = `${value}`
    
    if (props.isPercent && contextValue) {
      const isPercent = contextValue.includes('%')

      if (isPercent) {
        contextValue.replace('%', '') 
      }
      
      if (selectedType === "percent") {
        contextValue = `${contextValue}%`
      }
    }

    if (props.onInput) props.onInput(contextValue)
  }, [value, selectedType])

  return (
    <div className={`${css["input-box"]} ${props.className}`}>
      <Label 
        name={props.name} 
        required={props.required} 
        help={props.help}
        visible={props.label ? true : false}
      >
        { props.label || props.placeholder }
      </Label>
      
      <span className={css["input"]} aria-disabled={props.disabled}>
        <span className={css["start"]}>
          { Icon && <Icon size={20} /> }
          { props.isMoney && <p className="flex items-center h-full">R$</p> }
        </span>

        <input 
          className="w-full h-full py-xs"
          placeholder={props.placeholder}
          name={props.name}
          type={type}
          required={props.required}
          disabled={props.disabled}
          value={props.value}
          defaultValue={contextDefaultValue || (type === "number" && 0) || undefined}
          min={0}
          onInput={e => setValue(e.currentTarget.value)}
        />

        { selectOptions.length > 0 && (
          <Select name={`select-${props.name}`} 
            itemConfig={selectConfig} 
            options={selectOptions} 
            defaultValue={selectedType} 
            onValueChange={setSelectedType}
          />
        )}
      </span>
    </div>
  );
}

export default Input;