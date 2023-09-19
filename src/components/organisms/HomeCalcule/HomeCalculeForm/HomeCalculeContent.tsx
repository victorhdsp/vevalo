import css from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import Input from "@/components/atoms/Input";
import { selectCalculeWithCompany } from '@/redux/calcule/calcule.selectors';
import { CalculeStateType } from '@/redux/calcule/types';
import { changeUniqueInput } from '@/redux/calcule/slice';

export const HomeCalculeContent = () => {
  const inputs: CalculeStateType = useSelector(selectCalculeWithCompany);

  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeUniqueInput({ name, value }))
  }

  return (
    <div className={css['HomeCalculeContent']}>
      <Input type="number" name="company_cost" placeholder="Custo da empresa (R$)" onChange={handleChangeInput} value={inputs.company_cost} min={500} />
      <Input type="number" name="day_hours" placeholder="Horas por dia" onChange={handleChangeInput} value={inputs.day_hours} min={1} />
      <Input type="number" name="days_in_week" placeholder="Dias por semana" onChange={handleChangeInput} value={inputs.days_in_week} min={1} max={7} />
      <Input type="number" name="employees" placeholder="Funcionarios" onChange={handleChangeInput} value={inputs.employees} min={1} />
      {/* <Input type="number" name="profit_margin" placeholder="Margem de lucro (%)" onChange={handleChangeInput} value={inputs.profit_margin} min={0} /> */}
      {/* <Input type="number" name="estimated_time" placeholder="Horas estimadas" onChange={handleChangeInput} value={inputs.estimated_time} min={1} /> */}
    </div>
  )
}