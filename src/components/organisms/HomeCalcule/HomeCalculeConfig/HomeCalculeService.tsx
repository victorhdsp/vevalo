import { useDispatch, useSelector } from 'react-redux';

import Input from "@/components/atoms/Input";
import { CompanyStateType, changeUniqueInput } from '@/redux/company/slice';
import { RootState } from '@/redux/store';

export const HomeCalculeService = () => {
  const company: CompanyStateType = useSelector((rootReducer: RootState) => rootReducer.companyReducer);
  const inputs = company.services[0];

  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeUniqueInput({ name, value }))
  }

  return (
    <div className="flex flex-col gap-2">
      <h3>Serviço</h3>
      <div className="grid grid-cols-3 gap-2">
        <Input type="text" name="name" placeholder="Nome do serviço" onChange={handleChangeInput} value={inputs.name} />
        <Input type="number" name="margin_profit" placeholder="Margem de lucro (%)" onChange={handleChangeInput} value={inputs.margin_profit} min={0} />
        <Input type="number" name="estimated_time" placeholder="Horas estimadas" onChange={handleChangeInput} value={inputs.estimated_time} min={1} />
      </div>
    </div>
  )
}