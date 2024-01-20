import css from './style.module.scss'

import { useToast } from '@chakra-ui/toast';
import { useEffect, useState } from 'react';
import { User } from 'lucide-react';

import  Dialog, { ExternCloseDialog } from '../index';

import Data from './Data';
import Costs from './Costs';
import Button from "@/components/Button/Default"

import { ServiceType } from '@/assets/data/type';
import { useUser } from '@/store/User';

interface Props {
  title: string;
  children: React.ReactNode;
  service?: ServiceType
}

const DialogCollaborator = ({service, ...props}: Props) => {
  const toast = useToast()
  const updateServices = useUser((store) => (store.updateServices))

  const handleSaveService = () => {
  }

  return (
    <Dialog
      title="Novo colaborador"
      trigger={props.children}
    >
      <div className={css["body"]}>
        <Data />
        <Costs onClick={handleSaveService} />
      </div>
    </Dialog>
  )
}

export default DialogCollaborator