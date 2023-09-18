import { Minus } from 'lucide-react'

import Input from "@/components/atoms/Input";
import Select, { InternSelectionEvent } from "@/components/atoms/Select";
import css from './additional-item.module.scss'

import { AdditionalType } from "@/redux/calcule/types";
import { DestructiveButton } from '@/components/molecules/DestructiveButton';
import { Button } from '@/components/ui/button';

interface Props {
    item: AdditionalType;
    onRemoveAddicional: (item: AdditionalType) => void;
    onChangeAdditional: (item: AdditionalType) => void;
}

function AdditionalItem({ item, onRemoveAddicional, onChangeAdditional }:Props) {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement> | InternSelectionEvent) => {
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
            <DestructiveButton onConfirm={handleRemoveAddicional}>
              <Button className="my-auto aspect-square h-auto" variant="destructive" type="button">
                <Minus className='w-4 h-4' />
              </Button>
            </DestructiveButton>
        </div>
    )
}

export default AdditionalItem;