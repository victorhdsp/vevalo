import { useState } from 'react'
import css from './form.module.scss'

import FormCard from './Card'
import ConfigCard from './Config'

const Form = () => {
  const [statusConfig, setStatusConfig] = useState(false)

  const FormBox = () => (
    <>
      <div className={css["header"]}>
        <h2>Novo calculo</h2>
        <button onClick={() => setStatusConfig(true)} >⚙️</button>
      </div>
      <FormCard />
    </>
  )

  const ConfigBox = () => (
    <>
      <div className={css["header"]}>
        <h2>Sobre a empresa</h2>
        <button onClick={() => setStatusConfig(false)}>✖️</button>
      </div>
      <ConfigCard handleClose={() => setStatusConfig(false)} />
    </>
  )

  return (
      <div className={css["form"]}>
        { statusConfig ? <ConfigBox /> : <FormBox /> }
      </div>
  )
}

export default Form