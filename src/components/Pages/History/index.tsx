import css from './style.module.scss'

import { useState } from 'react'

import { Search } from 'lucide-react'

import HistoryOngoingView from './View/Ongoing'
import HistoryArchivedView from './View/Archived'
import Card from '@/components/Card'
import Input from '@/components/Form/Input'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useUser } from '@/store/User'

const History = () => {
  const [search, setSearch] = useState('')
  const projects = useUser((store) => (store.user.projects))

  const ongoingProjects = projects.filter(project => project.status === 'ongoing')
  const archivedProjects = projects.filter(project => project.status !== 'ongoing')

  return (
    <Card className={css["root"]} orientation="vertical">
      <div className={css["header"]}>
        <h2>Historico</h2>

        <Input 
          name='search' 
          placeholder='Pesquisar' 
          icon={Search} 
          value={search}
          onInput={(e) => setSearch(e.currentTarget.value)}
        />
      </div>

      <div className={css["body"]}>
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Em andamento</Tab>
            <Tab>Arquivados</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className={css["ongoing"]}>
              { 
                ongoingProjects.length > 0 ? 
                ongoingProjects.map(project => 
                  <HistoryOngoingView key={project.id} project={project} />
                ) : 
                <p>Nenhum projeto em andamento</p> 
              }
            </TabPanel>
            <TabPanel className={css["archived"]}>
              { 
                archivedProjects.length > 0 ? 
                archivedProjects.map(project => 
                  <HistoryArchivedView key={project.id} project={project} />
                ) : 
                <p>Nenhum projeto arquivado</p>
              }
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Card>
  )
}

export default History