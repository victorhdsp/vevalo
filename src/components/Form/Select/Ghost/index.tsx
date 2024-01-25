'use client';

import css from './style.module.scss'

import * as Select from '@radix-ui/react-select';

import { Check, ChevronDown } from 'lucide-react';


export interface SelectGhostProps {
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;

  options: {
    value: string;
    label: string;
  }[];

  itemConfig?: {
    width?: string;
    disabled?: boolean;
  }

  className?: string;
  onValueChange?: (value:string) => void
}

const _Select = (props:SelectGhostProps) => {
  return (
    <Select.Root 
      defaultValue={props.defaultValue} 
      required={props.required}
      onValueChange={props.onValueChange}
    >
      <Select.Trigger 
        className={`${css["trigger"] } ${props.className}`} 
        style={{width: props.itemConfig?.width}}
        name={props.name}
      >
        <Select.Value 
          placeholder={props.placeholder} 
        />
        <Select.Icon className="SelectIcon"><ChevronDown size={16} /></Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={css["content"]}>
          <Select.Viewport>
            <Select.Group>
              { 
                props.options.map((option, index) => (
                  <Select.Item 
                    key={option.value + '-' + index} 
                    className={css["item"]} 
                    value={option.value}
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator className="SelectItemIndicator">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))
              }
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default _Select