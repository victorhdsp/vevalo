import Input from '../../Input'
import css from './config.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost, changeDayHours, changeDaysInWeek, changeEmployees, CompanyStateType } from '../../../redux/company/slice'
import { RootState } from '../../../redux/store';

interface ConfigCardProps {
    handleClose: () => void;
}

const ConfigCard = ({ handleClose }: ConfigCardProps) => {
    const inputs = useSelector((rootReducer: RootState) => rootReducer.companyReducer) as CompanyStateType;

    const dispatch = useDispatch();

    const changeDefaultInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'company_name': dispatch(changeName(value)); break;
            case 'company_cost': dispatch(changeCost(value)); break;
            case 'day_hours': dispatch(changeDayHours(value)); break;
            case 'days_in_week': dispatch(changeDaysInWeek(value)); break;
            case 'employees': dispatch(changeEmployees(value)); break;
            default: break;
        }
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClose();
    }

    return (
        <form className={css['card']} onSubmit={onSubmit}> 
            <div className={css['_default']}>
                <Input type="text" name="company_name" placeholder="Nome da empresa" onChange={changeDefaultInput} value={inputs.company_name} />
                <Input type="number" name="company_cost" placeholder="Custo da empresa (R$)" onChange={changeDefaultInput} value={inputs.company_cost} min={500} />
                <Input type="number" name="employees" placeholder="Funcionários" onChange={changeDefaultInput} value={inputs.employees} min={1} />
                <Input type="number" name="day_hours" placeholder="Horas por dia" onChange={changeDefaultInput} value={inputs.day_hours} min={1} />
                <Input type="number" name="days_in_week" placeholder="Dias por semana" onChange={changeDefaultInput} value={inputs.days_in_week} min={0} />
            </div>

            <button className={css['button']} type="submit">Salvar</button>
        </form>
    )
}

export default ConfigCard