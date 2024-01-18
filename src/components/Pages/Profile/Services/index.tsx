import css from './style.module.scss'


import { Save } from 'lucide-react'
import { useUser } from '@/store/User'
import { useToast } from '@chakra-ui/react'

import Card from "@/components/Card"
import ScrollArea from '@/components/ScrollArea'
import ItemNew from '@/components/Item/New'
// import FormService from '@/components/Form/Service'
import ServiceView from '../View'

import ButtonNew from '@/components/Button/New'

const Services = () => {
  const toast = useToast()
  const services = useUser((store) => (store.user.services))

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Serviços</h2>
      <div className={css["services"]}>
        <ScrollArea className={css["content"]}>
          {
            services &&
            services.reverse().map((service) => (
              <ServiceView key={service.id} name={service.name} value={service.profit_margin} />
            ))
          }

          <ButtonNew />
        </ScrollArea>
      </div>
    </Card>
  )
}

export default Services