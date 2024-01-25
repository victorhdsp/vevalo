'use client'

import css from "./style.module.scss";
import Card from "@/components/Card";

import { Plus } from "lucide-react";

export interface Props {
  onClick?: () => void;
}

const ButtonNew = ({ onClick }: Props) => {
  return (
    <button 
      type="button" 
      className={css['button']} 
      onClick={onClick}
    >
      <Card className={css['card']}>
        <Plus />
        <span>Adicionar Novo</span>
      </Card>
    </button>
  );
}

export default ButtonNew;