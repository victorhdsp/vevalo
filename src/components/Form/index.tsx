import { useState } from 'react'
import css from './form.module.scss'

import FormCard from './Card'
import ConfigCard from './Config'
import { useSelector } from 'react-redux'

import { CompanyStateType } from '../../redux/company/slice'
import { RootState } from '../../redux/store'

const Form = () => {
  let initialStatusConfig = true;
  const company = useSelector((rootReducer: RootState) => rootReducer.companyReducer) as CompanyStateType;
  
  const { company_name, company_cost, day_hours, employees, days_in_week } = company;
  if (!company_name || !company_cost || !day_hours || !employees || !days_in_week ) {
    initialStatusConfig = true;
  } else {
    initialStatusConfig = false;
  }

  const [statusConfig, setStatusConfig] = useState(initialStatusConfig)


  const FormBox = () => (
    <div className={css["form"]}>
      <div className={css["header"]}>
        <h2>Novo calculo</h2>
        <button onClick={() => setStatusConfig(true)} >⚙️</button>
      </div>
      <FormCard />
    </div>
  )

  const ConfigBox = () => (
    <>
      <div className={css["form-config"]}>
        <div className={css["header"]}>
          <h2>Sobre a empresa</h2>
          <button onClick={() => setStatusConfig(false)}>✖️</button>
        </div>
        <ConfigCard handleClose={() => setStatusConfig(false)} />
      </div>
      <div className={css["background-form"]} />
    </>
  )

  return (
      <div className={css["form"]}>
        { statusConfig && <ConfigBox /> }
        <FormBox />
      </div>
  )
}

export default Form