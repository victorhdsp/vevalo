import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import css from './config.module.scss'

import Input from '../../Input'
import AdditionalBox from '../AdditionalBox';
import { setAllInputs, CompanyStateType } from '../../../redux/company/slice'
import { RootState } from '../../../redux/store';
import { AdditionalType } from '../../../redux/calcule/types';

interface ConfigCardProps {
    handleClose: () => void;
}

const ConfigCard = ({ handleClose }: ConfigCardProps) => {
    const company = useSelector((rootReducer: RootState) => rootReducer.companyReducer) as CompanyStateType;
    
    const [inputs, setInputs] = useState(company);
    const [currentService, setCurrentService] = useState({ id: 0, handle: inputs.services[0] });

    const dispatch = useDispatch();

    const changeDefaultInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const changeServiceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentService({ ...currentService, handle: { ...currentService.handle, [name]: value } });
        const services = inputs.services.map((service) => (service.id === currentService.handle.id ? { ...service, [name]: value } : service));
        setInputs({ ...inputs, services });
    }

    const handleChangeAdditional = (additionals: AdditionalType[]) => {
        setCurrentService({ ...currentService, handle: { ...currentService.handle, additionals } })
        const services = inputs.services.map((service) => (service.id === currentService.handle.id ? { ...service, additionals } : service));
        setInputs({ ...inputs, services });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setAllInputs(inputs));
        handleClose();
    }

    return (
        <form className={css['card']} onSubmit={onSubmit}> 
            <div className={css['_default']}>
                <Input type="text" name="company_name" placeholder="Nome da empresa" onChange={changeDefaultInput} value={inputs.company_name} />
                <Input type="number" name="company_cost" placeholder="Custo da empresa (R$)" onChange={changeDefaultInput} value={inputs.company_cost} min={500} />
                <Input type="number" name="employees" placeholder="Funcionários" onChange={changeDefaultInput} value={inputs.employees} min={1} />
                <Input type="number" name="day_hours" placeholder="Horas por dia" onChange={changeDefaultInput} value={inputs.day_hours} min={1} />
                <Input type="number" name="days_in_week" placeholder="Dias por semana" onChange={changeDefaultInput} value={inputs.days_in_week} min={1} max={7} />
            </div>
            <hr />
            <h3>Serviços</h3>
            <div className={css['_service']}>
                <Input type="text" name="name" placeholder="Nome do serviço" onChange={changeServiceInput} value={currentService.handle.name} />
                <Input type="number" name="margin_profit" placeholder="Margem de lucro (%)" onChange={changeServiceInput} value={currentService.handle.margin_profit} min={0} />
                <Input type="number" name="estimated_time" placeholder="Horas estimadas" onChange={changeServiceInput} value={currentService.handle.estimated_time} min={1} />
            </div>
            <AdditionalBox className={css['_alt-box']} data={currentService.handle.additionals} onChangeAdditional={handleChangeAdditional} />

            <button className={css['button']} type="submit">Salvar</button>
        </form>
    )
}

export default ConfigCard