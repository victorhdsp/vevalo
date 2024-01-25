import css from './style.module.scss'

import { useToast } from '@chakra-ui/toast';
import { useEffect, useState } from 'react';
import { Save, User } from 'lucide-react';

import  Dialog, { ExternCloseDialog } from '../index';

import Data from './Data';
import Costs from './Costs';
import Button from "@/components/Button/Default"

import { ServiceType } from '@/assets/data/type';
import { useUser } from '@/store/User';
import { generateId } from '@/assets/utils';
import { useCurrentService } from '@/store/currentService';

interface Props {
  title: string;
  children: React.ReactNode;
  service?: ServiceType
}

const DialogService = ({service, ...props}: Props) => {
  
  const toast = useToast()
  const updateServices = useUser((store) => (store.updateServices))
  
  const [currentService] = useCurrentService((store) => ([store.service]))
  const {name, profit_margin, description, costs } = currentService

  const handleSaveService = () => {
    if(!name) toast({ title: "Nome do serviço não pode ser vazio", status: "error" })
    else if(!profit_margin) toast({ title: "Margem de lucro não pode ser vazio", status: "error" })
    else if(!description) toast({ title: "Descrição não pode estar vazia", status: "error" })
    else if(!costs) toast({ title: "Custos não podem ser vazios", status: "error" })
  
    else {
      const newService:ServiceType = {
        id: service?.id || generateId(),
        name,
        profit_margin,
        description,
        costs
      }
  
      if (service) {
        updateServices('update', newService)
      } else {
        updateServices('add', newService)
      }
  
      ExternCloseDialog()
      toast({ title: 'Colaborador salvo com sucesso', status: 'success' })
    }
  }

  return (
    <Dialog
      title={props.title}
      trigger={props.children}
    >
      <div className={css["body"]}>
        <Data />
        <Costs />
      </div>

      <div className={css["footer"]}>
        <Button icon={Save} onClick={handleSaveService}>
          Salvar serviço
        </Button>
      </div>
    </Dialog>
  )
}

export default DialogService