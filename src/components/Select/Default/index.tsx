'use client';

import css from './style.module.scss'

import Ghost, { SelectGhostProps } from '../Ghost';
import Label from '@/components/Label';

interface Props extends SelectGhostProps {
  label?: string;
  help?: string;
  disabled?: boolean;
}

const _Select = (props:Props) => {
  return (
    <div className={css["select-box"]}>
      <Label 
        name={props.name} 
        required={props.required} 
        help={props.help}
        label={props.label}
      />
      <span className={css["select"]} aria-disabled={props.disabled}>
        <Ghost
          { ...props }
          defaultValue={props.defaultValue || (props.options ? props.options[0].value : '')}
          className="w-full py-xs"
        />
      </span>
    </div>
  )
}

export default _Select