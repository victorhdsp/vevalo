import css from './style.module.scss'

import { Save } from 'lucide-react'

import { useEffect, useRef, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useUser } from '@/store/User'

import CollaboratorView from '../View'
import Card from "@/components/Card"
import ScrollArea from '@/components/ScrollArea'
import ButtonNew from '@/components/Button/New'
import DialogCollaborator from '@/components/Dialog/Collaborator'
import { makeFinance } from '@/assets/utils/number'
import { WorkerType } from '@/assets/data/type'

const Collaborators = () => {
  const [workers, updateWorkers] = useUser((store) => ([store.user.workers, store.updateWorkers]))
  const [currentWorker, setCurrentWorker] = useState<WorkerType|undefined>(undefined)

  const handleEditWorker = (worker: WorkerType) => {
    setCurrentWorker(worker)
    document.getElementById('edit-collaborator')?.click()
  }

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Colaboradores</h2>

      <div className={css["collaborators"]}>
        <ScrollArea className={css["content"]}>
          {
            workers && 
            workers
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((worker, index) => (
                <CollaboratorView 
                  key={index} 
                  name={worker.name} 
                  value={makeFinance(worker.salary)} 
                  onClickInEdit={() => handleEditWorker(worker)}
                  onClickInDelete={() => {updateWorkers("remove", worker)}}
                />
              ))
          }
        </ScrollArea>
      </div>
      
      <div className={css["footer"]}>
        <DialogCollaborator 
          title="Editar colaborador" 
          worker={currentWorker}
        >
              <div id='edit-collaborator' ></div>
        </DialogCollaborator>
        
        <DialogCollaborator title="Novo colaborador">
            <ButtonNew />
        </DialogCollaborator>
      </div>

    </Card>
  )
}

export default Collaborators