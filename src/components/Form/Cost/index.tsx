import css from './style.module.scss'

import { Trash } from "lucide-react";

import ButtonIcon from "@/components/Button/Icon"
import Button from '@/components/Button/Default';
import Input from "@/components/Input";

import { useCurrentService } from '@/store/currentService';
import { CostsTypes } from '@/assets/data/type';
import { useEffect, useState } from 'react';

interface Props {
  cost: CostsTypes
  onChange?: (id:string, name:'name'|'value', value: string) => void
}

const Cost = ({ cost, ...props }: Props) => {
  const removeCost = useCurrentService(store => store.removeCost)

  const [name, setName] = useState(cost.name)
  const [value, setValue] = useState(cost.value)

  const handleDelete = () => removeCost(cost.id)

  useEffect(() => props.onChange && props.onChange(cost.id, 'name', name) , [name])
  useEffect(() => props.onChange && props.onChange(cost.id, 'value', value) , [value])

  return (
    <form className={css["formService"]}>
      <div key={cost.id} className="flex gap-x-xs">
        <Input 
          name="name" 
          placeholder="Nome"
          defaultValue={name}
          onInput={setName} 
        />
        <Input 
          name="value" 
          isMoney 
          isPercent 
          defaultValue={value}
          onInput={setValue} 
        />
        <ButtonIcon 
          icon={Trash} 
          size="small" 
          variant="danger"
          onClick={handleDelete}
        />
      </div>
    </form>
  )
}

export default Cost;