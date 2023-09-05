import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../../Input";
import Select from "../../Select";
import css from './additional-item.module.scss'

import { changeAdditional, removeAdditional } from "../../../redux/calcule/slice";
import { AdditionalType } from "../../../redux/calcule/types";

interface Props {
    item: AdditionalType;
}

function AdditionalItem({ item }:Props) {
    const [dataItem, setDataItem] = useState(item);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeAdditional(dataItem));
    }, [dataItem, dispatch]);

    const handleChangeAdditional = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        const { name, value } = e.target;
        setDataItem({ ...dataItem, [name]: value });
        
    }

    const handleRemoveAddicional = () => {
        dispatch(removeAdditional(dataItem))
    }

    return (
        <div className={css['_additional']}>
            <Input type="text" name="name" placeholder="Nome" onChange={handleChangeAdditional} value={dataItem.name} />
            <Select name="type" placeholder="Tipo" onChange={handleChangeAdditional}>
                <option value="fixed">Fixo</option>
                <option value="porcentage">Porcentagem</option>
            </Select>
            <Input type="number" name="value" placeholder="Valor" onChange={handleChangeAdditional} value={dataItem.value} />
            <button className={css['remove_button']} onClick={handleRemoveAddicional} type="button">-</button>
        </div>
    )
}

export default AdditionalItem;