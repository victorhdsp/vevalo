import { useEffect, useRef } from 'react';
import css from './additional-box.module.scss'

import { defaultAdditionalItem, fixScrollBar } from '../actions';
import { AdditionalType } from '../../../redux/calcule/types';
import AdditionalItem from './AdditionalItem';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface Props {
  elements: AdditionalType[];
    onChangeAdditional: (elements: AdditionalType[]) => void;
    className?: string;
}

const AdditionalBox = ({ elements, onChangeAdditional, className='' }: Props) => {
    const scrollableDivRef = useRef(null);
    useEffect(() => { fixScrollBar(scrollableDivRef) }, [elements]);

    const handleNewAddicional = () => {
        const newElements = [...elements, defaultAdditionalItem()];
        onChangeAdditional(newElements)
    }

    const handleRemoveAddicional = (item: AdditionalType) => {
        const newElements = elements.filter((oldItem) => oldItem.id !== item.id);
        onChangeAdditional(newElements)
    }

    const handleChangeAdditional = (editItem: AdditionalType) => {
        const newElements = elements.map((oldItem) => (oldItem.id === editItem.id ? editItem : oldItem));
        onChangeAdditional(newElements)
    }

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
            <Button onClick={handleNewAddicional} type="button">
              Novo serviço adicional
              <Plus className="w-4 h-4 ml-2" />
            </Button>
        </div>
    )
}

export default AdditionalBox;