import { useDispatch, useSelector } from 'react-redux';

import Input from "@/components/atoms/Input";
import { CompanyStateType } from '@/redux/company/slice';
import { RootState } from '@/redux/store';
import { selectCalculeWithCompany } from '@/redux/calcule/calcule.selectors';
import { CalculeStateType } from '@/redux/calcule/types';
import { changeUniqueInput } from '@/redux/calcule/slice';

interface Props {
  service: number;
}

export const HomeCalculeService = ({service}: Props) => {
  const inputs: CalculeStateType = useSelector(selectCalculeWithCompany);
  const company: CompanyStateType = useSelector((rootReducer: RootState) => rootReducer.companyReducer);
  const services = company.services.map((service) => service.name);

  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeUniqueInput({ name, value }))
  }

  return (
    <div className="flex flex-col gap-2">
      <h3>Serviço</h3>
      <div className="grid grid-cols-3 gap-2">
        <Input type="text" name="name" placeholder="Nome do serviço" value={services[service]} />
        <Input type="number" name="profit_margin" placeholder="Margem de lucro (%)" onChange={handleChangeInput} value={inputs.profit_margin} min={0} />
        <Input type="number" name="estimated_time" placeholder="Horas estimadas" onChange={handleChangeInput} value={inputs.estimated_time} min={1} />
      </div>
    </div>
  )
}