import { useEffect, useRef } from "react";
import css from './form.module.scss'

import Input from "../../Input";
import AdditionalItem from "../AdditionalItem";
import { useDispatch, useSelector } from "react-redux";
import service from "../../../assets/scripts/service";

import { changeEmployees, changeCompanyCost,changeDayHours,changeDaysInWeek,changeEstimatedTime,changeProfitMargin,addNewAdditional, CalculeStateType, resetAllInputs, setAllInputs } from "../../../redux/calcule/slice";
import { addCalculeToHistory } from "../../../redux/history/slice";
import { CompanyStateType } from "../../../redux/company/slice";

function FormCard() {
    const scrollableDivRef = useRef(null);

    const inputs = useSelector((rootReducer) => rootReducer.calculeReducer) as CalculeStateType;
    const company = useSelector((rootReducer) => rootReducer.companyReducer) as CompanyStateType;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAllInputs(company));
    }, []);
    
    useEffect(() => {
        const scrollableDiv = scrollableDivRef.current as HTMLDivElement | null;

        if (scrollableDiv) {
            if (scrollableDiv.scrollHeight > scrollableDiv.clientHeight) {
                scrollableDiv.scrollTo(0, scrollableDiv.scrollHeight);
                scrollableDiv.classList.add(css['lateral_scroll']);
            } else {
                scrollableDiv.classList.remove(css['lateral_scroll']);
            }
        }
    }, [inputs.additionals]);
    
    const changeDefaultInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'company_cost': dispatch(changeCompanyCost(value)); break;
            case 'day_hours': dispatch(changeDayHours(value)); break;
            case 'days_in_week': dispatch(changeDaysInWeek(value)); break;
            case 'employees': dispatch(changeEmployees(value)); break;
            case 'profit_margin': dispatch(changeProfitMargin(value)); break;
            case 'estimated_time': dispatch(changeEstimatedTime(value)); break;
            default: break;
        }
    }

    const handleNewAddicional = () => {
        dispatch(addNewAdditional());
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addCalculeToHistory({ ...inputs, result: service(inputs)}));
        dispatch(setAllInputs(company));
    }

    return (
        <form className={css['card']} onSubmit={onSubmit}>
            <div className={css['_default']}>
                <Input type="number" name="company_cost" placeholder="Custo da empresa (R$)" onChange={changeDefaultInput} value={inputs.company_cost} min={500} />
                <Input type="number" name="day_hours" placeholder="Horas por dia" onChange={changeDefaultInput} value={inputs.day_hours} min={1} />
                <Input type="number" name="days_in_week" placeholder="Dias por semana" onChange={changeDefaultInput} value={inputs.days_in_week} min={0} />
                <Input type="number" name="employees" placeholder="Funcionarios" onChange={changeDefaultInput} value={inputs.employees} min={1} />
                <Input type="number" name="profit_margin" placeholder="Margem de lucro (%)" onChange={changeDefaultInput} value={inputs.profit_margin} min={0} />
                <Input type="number" name="estimated_time" placeholder="Horas estimadas" onChange={changeDefaultInput} value={inputs.estimated_time} min={1} />
            </div>
            <div className={css['_additionals']}>
                <div ref={scrollableDivRef}>
                { inputs.additionals.map((item) => (
                    <AdditionalItem key={'additional_'+item.id} item={item}/>
                ))}
                </div>
                <button className={css['button']} onClick={handleNewAddicional} type="button">Adicionar novo</button>
            </div>

            <button className={css['button']} type="submit">Calcular</button>
        </form>
    )
}

export default FormCard;