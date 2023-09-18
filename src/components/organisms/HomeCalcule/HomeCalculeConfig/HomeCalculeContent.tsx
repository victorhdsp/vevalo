import css from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import Input from "@/components/atoms/Input";
import { CompanyStateType, changeUniqueInput } from '@/redux/company/slice';
import { RootState } from '@/redux/store';

export const HomeCalculeContent = () => {
  const inputs: CompanyStateType = useSelector((rootReducer: RootState) => rootReducer.companyReducer);

  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeUniqueInput({ name, value }))
  }

  return (
    <div className={css['HomeCalculeContent']}>
      <Input type="text" name="company_name" placeholder="Nome da empresa" onChange={handleChangeInput} value={inputs.company_name} />
      <Input type="number" name="company_cost" placeholder="Custo da empresa (R$)" onChange={handleChangeInput} value={inputs.company_cost} min={500} />
      <Input type="number" name="employees" placeholder="Funcionários" onChange={handleChangeInput} value={inputs.employees} min={1} />
      <Input type="number" name="day_hours" placeholder="Horas por dia" onChange={handleChangeInput} value={inputs.day_hours} min={1} />
      <Input type="number" name="days_in_week" placeholder="Dias por semana" onChange={handleChangeInput} value={inputs.days_in_week} min={1} max={7} />
    </div>
  )
}