import css from './style.module.scss'

import { useState } from 'react'
import { useUser } from '@/store/User'

import Card from "@/components/Card"
import ScrollArea from '@/components/ScrollArea'
import ServiceView from '../View'
import ButtonNew from '@/components/Button/New'
import { ServiceType } from '@/assets/data/type'
import Link from 'next/link'


const Services = () => {
  const [services, updateServices] = useUser((store) => ([store.user.services, store.updateServices]))
  const [currentService, setCurrentService] = useState<ServiceType|undefined>(undefined)

  const handleEditService = (Service: ServiceType) => {
    setCurrentService(Service)
    document.getElementById('edit-collaborator')?.click()
  }

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Serviços</h2>
      <div className={css["services"]}>
        <ScrollArea className={css["content"]}>
          {
            services &&
            services
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((service) => (
                <ServiceView 
                  key={service.id} 
                  name={service.name} 
                  value={service.profit_margin} 
                  onClickInEdit={() => handleEditService(service)}
                  onClickInDelete={() => {updateServices("remove", service)}}
                />
              ))
          }
        </ScrollArea>
      </div>
      <div className={css["footer"]}>
        <Link href="/perfil/novo_servico"><ButtonNew /></Link>
      </div>
    </Card>
  )
}

export default Services