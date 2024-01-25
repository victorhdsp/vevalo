import css from './style.module.scss'

import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '@/store/User'
import { useCurrentService } from '@/store/currentService'

import { ServiceType } from '@/assets/data/type'
import { makeFinance } from '@/assets/utils/number'

import ServiceView from '../View'
import Card from "@/components/Card"
import ScrollArea from '@/components/ScrollArea'
import ButtonNew from '@/components/Button/New'
import DialogService from '@/components/Dialog/Service'



const Services = () => {
  const [services, updateServices] = useUser((store) => ([store.user.services, store.updateServices]))
  const [currentService, setCurrentService, reset] = useCurrentService((store) => ([store.service, store.setCurrentService, store.reset]))

  const handleEditService = (Service: ServiceType) => {
    setCurrentService(Service)
    document.getElementById('edit-service')?.click()
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
                  value={makeFinance(service.profit_margin)} 
                  onClickInEdit={() => handleEditService(service)}
                  onClickInDelete={() => {updateServices("remove", service)}}
                />
              ))
          }
        </ScrollArea>
      </div>
      <div className={css["footer"]}>
        <DialogService 
          title="Editar serviço" 
          service={currentService}
        >
          <div id='edit-service' ></div>
        </DialogService>
        
        <DialogService title="Novo serviço">
            <ButtonNew onClick={reset} />
        </DialogService>
      </div>
    </Card>
  )
}

export default Services