import css from './style.module.scss'

import { useToast } from '@chakra-ui/toast';
import { useState } from 'react';
import { User } from 'lucide-react';

import  Dialog from '../index';

import Button from "@/components/Button/Default"
import Input from '@/components/Form/Input'
import { WorkerType } from '@/assets/data/type';
import { useUser } from '@/store/User';
import { generateId } from '@/assets/utils';

interface Props {
  title: string;
  children: React.ReactNode;
  worker?: WorkerType
}

const DialogCollaborator = ({worker, ...props}: Props) => {
  const toast = useToast()
  const updateWorkers = useUser((store) => (store.updateWorkers))
  const [name, setName] = useState(worker?.name || '')
  const [salary, setSalary] = useState(worker?.salary || '')

  const handleSaveWorker = () => {
    if(!name) { toast({ title: 'Nome é obrigatório', status: 'error' }) }
    if(!salary) { toast({ title: 'Salário é obrigatório', status: 'error' }) }

    const newWorker = {
      id: worker?.id || generateId(),
      name,
      salary
    }

    if (worker) {
      updateWorkers('update', newWorker)
    } else {
      updateWorkers('add', newWorker)
    }

    setName('')
    setSalary('')
    toast({ title: 'Colaborador salvo com sucesso', status: 'success' })
  }

  return (
    <Dialog
      title="Novo colaborador"
      trigger={props.children}
    >
      <Input 
        name="name" 
        label="Nome" 
        required
        value={name}
        onInput={(event) => setName(event.currentTarget.value)}
      />
      <Input 
        name="salary" 
        label="Salário" 
        required
        value={salary}
        onInput={(event) => setSalary(event.currentTarget.value)}
        type='number'
      />

      <Button className={css["button"]} onClick={handleSaveWorker} icon={User}>
        Salvar colaborador
      </Button>
    </Dialog>
  )
}

export default DialogCollaborator