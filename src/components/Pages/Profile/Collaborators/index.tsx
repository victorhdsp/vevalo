import css from './style.module.scss'

import { Save } from 'lucide-react'

import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useUser } from '@/store/User'

import CollaboratorView from '../View'
import Card from "@/components/Card"
import ScrollArea from '@/components/ScrollArea'
import ButtonNew from '@/components/Button/New'
import DialogCollaborator from '@/components/Dialog/Collaborator'
import { makeFinance } from '@/assets/utils/number'

const Collaborators = () => {
  const toast = useToast()
  const workers = useUser((store) => (store.user.workers))

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Colaboradores</h2>

      <div className={css["collaborators"]}>
        <ScrollArea className={css["content"]}>
          {
            workers && 
            workers.map((worker, index) => (
              <CollaboratorView key={index} name={worker.name} value={makeFinance(worker.salary)} />
            ))
          }
          <DialogCollaborator title="Novo colaborador">
            <ButtonNew />
          </DialogCollaborator>
        </ScrollArea>
      </div>

    </Card>
  )
}

export default Collaborators