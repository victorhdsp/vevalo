import css from './style.module.scss'

import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'

interface Props {
  name: string
  label: string
  value: string
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void
}

const DayHours = (props:Props) => {
  return (
    <div className={css["root"]}>
      <div className={css["name"]} data-value={props.value}>
        <Label name={props.name}>
          {props.label}
        </Label>
      </div>

      <div className={css["value"]}>
        <Input 
          name={props.name} 
          value={props.value} 
          type="number" 
          min={0}
          onInput={props?.onInput}
        />
      </div>
    </div>
  )
}

export default DayHours