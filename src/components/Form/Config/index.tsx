import { useDispatch, useSelector } from 'react-redux'
import css from './config.module.scss'

import Input from '../../Input'
import AdditionalBox from '../AdditionalBox';
import { changeUniqueService, CompanyStateType, changeUniqueInput } from '../../../redux/company/slice'
import { RootState } from '../../../redux/store';
import { AdditionalType } from '../../../redux/calcule/types';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

interface ConfigCardProps {
    handleClose: () => void;
}

const ConfigCard = ({ handleClose }: ConfigCardProps) => {
    const company = useSelector((rootReducer: RootState) => rootReducer.companyReducer) as CompanyStateType;
    const currentService = company.services[0];

    const dispatch = useDispatch();

    const changeDefaultInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log('blur')
        dispatch(changeUniqueInput({ name, value }))
    }

    const changeServiceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(changeUniqueService({ id: 0, name, value }))
    }

    const handleChangeAdditional = (additionals: AdditionalType[]) => {
        dispatch(changeUniqueService({ id: 0, name: 'additionals', value: additionals }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClose();
        window.location.reload();
    }

    return (
        <form className={css['card']} onSubmit={onSubmit}> 
            <div className={css['_default']}>
                <Input type="text" name="company_name" placeholder="Nome da empresa" onChange={changeDefaultInput} value={company.company_name} />
                <Input type="number" name="company_cost" placeholder="Custo da empresa (R$)" onChange={changeDefaultInput} value={company.company_cost} min={500} />
                <Input type="number" name="employees" placeholder="Funcionários" onChange={changeDefaultInput} value={company.employees} min={1} />
                <Input type="number" name="day_hours" placeholder="Horas por dia" onChange={changeDefaultInput} value={company.day_hours} min={1} />
                <Input type="number" name="days_in_week" placeholder="Dias por semana" onChange={changeDefaultInput} value={company.days_in_week} min={1} max={7} />
            </div>
            <hr />
            <h3>Serviços</h3>
            <div className={css['_service']}>
                <Input type="text" name="name" placeholder="Nome do serviço" onChange={changeServiceInput} value={currentService.name} />
                <Input type="number" name="margin_profit" placeholder="Margem de lucro (%)" onChange={changeServiceInput} value={currentService.margin_profit} min={0} />
                <Input type="number" name="estimated_time" placeholder="Horas estimadas" onChange={changeServiceInput} value={currentService.estimated_time} min={1} />
            </div>
            <AdditionalBox className={css['_alt-box']} elements={currentService.additionals} onChangeAdditional={handleChangeAdditional} />

            <Button type="submit">
              Salvar
              <Save className="w-4 h-4 ml-2" />
            </Button>
        </form>
    )
}

export default ConfigCard