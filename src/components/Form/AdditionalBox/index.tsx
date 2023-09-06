import { useEffect, useRef, useState } from 'react';
import css from './additional-box.module.scss'

import { defaultAdditionalItem, fixScrollBar } from '../actions';
import { AdditionalType } from '../../../redux/calcule/types';
import AdditionalItem from './AdditionalItem';

interface Props {
    data: AdditionalType[];
    onChangeAdditional: (elements: AdditionalType[]) => void;
    className?: string;
}

const AdditionalBox = ({ data, onChangeAdditional, className='' }: Props) => {
    const scrollableDivRef = useRef(null);
    const [elements, setElements] = useState(data);

    useEffect(() => { fixScrollBar(scrollableDivRef) }, [elements]);

    const handleNewAddicional = () => {
        setElements([...elements, defaultAdditionalItem()]);
        onChangeAdditional(elements)
    }

    const handleRemoveAddicional = (item: AdditionalType) => {
        setElements(elements.filter((oldItem) => oldItem.id !== item.id));
        onChangeAdditional(elements)
    }

    const handleChangeAdditional = (editItem: AdditionalType) => {
        setElements(elements.map((oldItem) => (oldItem.id === editItem.id ? editItem : oldItem)));
    }

    useEffect(() => { onChangeAdditional(elements) }, [elements])

    return (
        <div className={`${css['additional-box']} ${className}`}>
            <div ref={scrollableDivRef}>
                { elements.map((item) => (
                    <AdditionalItem
                        key={'additional_'+item.id} 
                        item={item} 
                        onRemoveAddicional={handleRemoveAddicional} 
                        onChangeAdditional={handleChangeAdditional}
                    /> 
                ))}
            </div>
            <button className={css['button']} onClick={handleNewAddicional} type="button">Novo serviço adicional</button>
        </div>
    )
}

export default AdditionalBox;