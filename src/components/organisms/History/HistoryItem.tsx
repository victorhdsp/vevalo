import css from './style.module.scss'

import { UserCircle } from "lucide-react";
import { useDispatch } from "react-redux";

import { HistoryItemType } from "@/redux/history/slice";
import { setAllInputs } from "@/redux/calcule/slice";

interface Props {
  item: HistoryItemType;
}

const money = (value: number) => {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
}

export const HistoryItem = ({ item }: Props) => {
  const dispatch = useDispatch();

  const handleSelectHistory = () => dispatch(setAllInputs(item));

  return (
      <div className={css['HistoryItem']} onClick={handleSelectHistory}>
          <div className={css['logo']}>
            <UserCircle className="w-8 h-8" />
          </div>
          <div className={css['content']}>
            <p>Tempo estimado: <span>{item.estimated_time} horas</span></p>
            <b><p>Resultado: <span>{money(item.result.total)}</span></p></b>
          </div>
      </div>
  )
}