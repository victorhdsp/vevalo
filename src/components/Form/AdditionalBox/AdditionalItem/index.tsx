import { Minus } from 'lucide-react'

import Input from "../../../Input";
import Select from "../../../Select";
import css from './additional-item.module.scss'

import { AdditionalType } from "../../../../redux/calcule/types";
import { Button } from "@/components/ui/button";

interface Props {
    item: AdditionalType;
    onRemoveAddicional: (item: AdditionalType) => void;
    onChangeAdditional: (item: AdditionalType) => void;
}

function AdditionalItem({ item, onRemoveAddicional, onChangeAdditional }:Props) {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        const name = e.target.name;
        const value = name === 'value' ? Number(e.target.value) : e.target.value;
        onChangeAdditional({ ...item, [name]: value })
    }
    
    const handleRemoveAddicional = () => onRemoveAddicional(item);

    return (
        <div className={css['_additional']}>
            <Input type="text" name="name" placeholder="Nome" onChange={handleChangeInput} value={item.name} />
            <Select 
              name="type" 
              placeholder="Tipo" 
              onChange={handleChangeInput}
              value={item.type}
              options={[
                { value: 'fixed', label: 'Fixo' },
                { value: 'porcentage', label: 'Porcentagem' },
              ]}
            />
            <Input type="number" name="value" placeholder="Valor" onChange={handleChangeInput} value={item.value} />
            <Button className="my-auto aspect-square h-auto" variant="destructive" onClick={handleRemoveAddicional} type="button">
                <Minus className='w-4 h-4' />
            </Button>
        </div>
    )
}

export default AdditionalItem;