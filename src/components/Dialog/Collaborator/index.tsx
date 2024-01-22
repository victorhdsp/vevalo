import css from './style.module.scss'

import { useToast } from '@chakra-ui/toast';
import { useEffect, useState } from 'react';
import { User } from 'lucide-react';

import  Dialog, { ExternCloseDialog } from '../index';

import Button from "@/components/Button/Default"
import Input from '@/components/Form/Input'
import WeeklyHours from '@/components/Item/WeeklyHours'

import { WorkerType } from '@/assets/data/type';
import { useUser } from '@/store/User';
import { generateId } from '@/assets/utils';
import { defaultWeeklyHours } from '@/assets/data/starter';

interface Props {
  title: string;
  children: React.ReactNode;
  worker?: WorkerType
}

const DialogCollaborator = ({worker, ...props}: Props) => {
  const toast = useToast()
  const updateWorkers = useUser((store) => (store.updateWorkers))
  const [name, setName] = useState(worker?.name || '')
  const [salary, setSalary] = useState(worker?.salary || '0')
  const [weeklyHours, setWeeklyHours] = useState(worker?.weekly_hours || defaultWeeklyHours)

  useEffect(() => {
    setName(worker?.name || '')
    setSalary(worker?.salary || '0')
    setWeeklyHours(worker?.weekly_hours || defaultWeeklyHours)
  }, [worker])

  const handleSaveWorker = () => {
    if(!name) { toast({ title: 'Nome é obrigatório', status: 'error' }) }
    else if(!salary) { toast({ title: 'Salário é obrigatório', status: 'error' }) }
    else {
      const newWorker = {
        id: worker?.id || generateId(),
        name,
        salary,
        weekly_hours: weeklyHours
      }
  
      if (worker) {
        updateWorkers('update', newWorker)
      } else {
        updateWorkers('add', newWorker)
      }
  
      console.log(newWorker)
      ExternCloseDialog()

      setName('')
      setSalary('')
      setWeeklyHours(defaultWeeklyHours)
      
      toast({ title: 'Colaborador salvo com sucesso', status: 'success' })
    }
  }

  return (
    <Dialog
      title={props.title}
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
      <div className={css["weekly"]}>
        <WeeklyHours onChange={(days) => setWeeklyHours(days)}  />
      </div>      

      <Button className={css["button"]} onClick={handleSaveWorker} icon={User}>
        Salvar colaborador
      </Button>
    </Dialog>
  )
}

export default DialogCollaborator