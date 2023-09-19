import css from "./style.module.scss";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OverflowBox } from "@/components/molecules/OverflowBox";
import { useDispatch, useSelector } from "react-redux";
import AdditionalItem from "../AdditionalItem";
import { defaultAdditionalItem } from "@/redux/calcule/util";
import { AdditionalType } from "@/redux/calcule/types";
import { CompanyStateType, changeUniqueService } from "@/redux/company/slice";
import { RootState } from "@/redux/store";

interface Props {
  service: number;
}

export const HomeCalculeAdditionalBox = ({service}: Props) => {
  const company: CompanyStateType = useSelector((rootReducer: RootState) => rootReducer.companyReducer);
  const elements = company.services[service].additionals || [];
  const dispatch = useDispatch();

  const dispatchUniqueInput = (value: AdditionalType[]) => {
    dispatch(changeUniqueService({ id: service, name: 'additionals', value }))
  }

  const handleNewAddicional = () => 
    dispatchUniqueInput([...elements, defaultAdditionalItem()])

  const handleRemoveAddicional = (item: AdditionalType) => 
    dispatchUniqueInput(elements.filter((oldItem) => oldItem.id !== item.id))

  const handleChangeAdditional = (editItem: AdditionalType) => 
    dispatchUniqueInput(elements.map((oldItem) => oldItem.id === editItem.id ? editItem : oldItem ))

  return (
    <div className={css["HomeCalculeAdditionalBox"]}>
      <h4 className="min-h-[1.5rem] flex">Serviços adicionais</h4>

      <OverflowBox maxHeight="30vh" className="space-y-2">
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
