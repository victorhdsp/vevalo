import css from './style.module.scss'


import Card from "@/components/Card"
import Input from '@/components/Form/Input'
import { useCurrentService } from '@/store/currentService'

const NewService = () => {
  const [name, profit_margin, description, updateService] = 
    useCurrentService((store) => ([store.service.name, store.service.profit_margin, store.service.description, store.updateService]))

  return (
    <Card className={css["root"]} orientation="vertical">
      <h2>Novo serviço</h2>

      <div className={css["new-service"]}>
        <Input 
          name="name" 
          label="Nome do serviço" 
          required
          value={name}
          onInput={(event) => updateService("name", event.currentTarget.value)}
        />
        <Input 
          name="profit_margin" 
          label="Margem de lucro" 
          required
          value={profit_margin}
          isPercent
          isMoney
          onInput={(event) => updateService("profit_margin", event.currentTarget.value)}
        />
        <Input 
          name="description" 
          label="Descrição" 
          required
          value={description}
          onInput={(event) => updateService("description", event.currentTarget.value)}
        />
      </div>
    </Card>
  )
}

export default NewService