import css from "./style.module.scss";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OverflowBox } from "@/components/molecules/OverflowBox";
import { useDispatch, useSelector } from "react-redux";
import { selectCalculeWithCompany } from "@/redux/calcule/calcule.selectors";
import AdditionalItem from "../AdditionalItem";
import { defaultAdditionalItem } from "@/redux/calcule/util";
import { AdditionalType } from "@/redux/calcule/types";
import { changeUniqueInput } from "@/redux/calcule/slice";

export const HomeCalculeAdditionalBox = () => {
  const elements = useSelector(selectCalculeWithCompany).additionals || [];
  const dispatch = useDispatch();

  const dispatchUniqueInput = (value: AdditionalType[]) => {
    dispatch(changeUniqueInput({ name: 'additionals', value }))
  }

  const handleNewAddicional = () => 
    dispatchUniqueInput([...elements, defaultAdditionalItem()])

  const handleRemoveAddicional = (item: AdditionalType) => 
    dispatchUniqueInput(elements.filter((oldItem) => oldItem.id !== item.id))

  const handleChangeAdditional = (editItem: AdditionalType) => 
    dispatchUniqueInput(elements.map((oldItem) => oldItem.id === editItem.id ? editItem : oldItem ))

  return (
    <div className={css["HomeCalculeAdditionalBox"]}>
      <h3 className="min-h-[1.75rem] flex">Serviços adicionais</h3>

      <OverflowBox maxHeight="47vh" className="space-y-2">
        {elements.map((item, index) => (
          <AdditionalItem key={index} item={item} onChangeAdditional={handleChangeAdditional} onRemoveAddicional={handleRemoveAddicional} />
        ))}
      </OverflowBox>

      <Button type="button" className="w-full" onClick={handleNewAddicional}>
        <span>Novo serviço adicional</span>
        <Plus className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};
