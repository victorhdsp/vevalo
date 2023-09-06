import { useEffect, useState } from "react";

import Input from "../../../Input";
import Select from "../../../Select";
import css from './additional-item.module.scss'

import { AdditionalType } from "../../../../redux/calcule/types";

interface Props {
    item: AdditionalType;
    onRemoveAddicional: (item: AdditionalType) => void;
    onChangeAdditional: (item: AdditionalType) => void;
}

function AdditionalItem({ item, onRemoveAddicional, onChangeAdditional }:Props) {
    const [dataItem, setDataItem] = useState(item);
    
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        const name = e.target.name;
        const value = name === 'value' ? Number(e.target.value) : e.target.value;
        setDataItem({ ...dataItem, [name]: value });
    }
    
    const handleRemoveAddicional = () => {
        onRemoveAddicional(dataItem);
    }
    
    useEffect(() => {
        onChangeAdditional(dataItem)
    }, [dataItem]);

    return (
        <div className={css['_additional']}>
            <Input type="text" name="name" placeholder="Nome" onChange={handleChangeInput} value={dataItem.name} />
            <Select name="type" placeholder="Tipo" onChange={handleChangeInput}>
                <option value="fixed">Fixo</option>
                <option value="porcentage">Porcentagem</option>
            </Select>
            <Input type="number" name="value" placeholder="Valor" onChange={handleChangeInput} value={dataItem.value} />
            <button className={css['remove_button']} onClick={handleRemoveAddicional} type="button">-</button>
        </div>
    )
}

export default AdditionalItem;