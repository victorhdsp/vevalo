import css from './style.module.scss';

import { useDispatch } from "react-redux";
import { Trash } from "lucide-react";

import { clearHistory } from "@/redux/history/slice";
import { DestructiveButton } from "@/components/molecules/DestructiveButton";
import { Button } from "@/components/ui/button";


export const HistoryHeader = () => {
  const dispatch = useDispatch();
  const handleClearHistory = () => dispatch(clearHistory());

  return (
    <div className={css['HistoryHeader']}>
      <h2>Histórico</h2>
      
      <DestructiveButton onConfirm={handleClearHistory}>
        <Button variant="secondary">
          <Trash className="w-4 h-4" />
        </Button>
      </DestructiveButton>
    </div>
  )
}