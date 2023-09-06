import { useEffect, useState } from "react";
import css from './form.module.scss'

import Input from "../../Input";
import AdditionalBox from "../AdditionalBox";
import { useDispatch, useSelector } from "react-redux";
import service from "../../../assets/scripts/service";

import { setAllInputs } from "../../../redux/calcule/slice";
import { AdditionalType, CalculeStateType } from "../../../redux/calcule/types";
import { addCalculeToHistory } from "../../../redux/history/slice";
import { CompanyStateType } from "../../../redux/company/slice";
import { RootState } from "../../../redux/store";
import { selectCalculeWithCompany } from "../../../redux/calcule/calcule.selectors";

function FormCard() {
    const calcule = useSelector(selectCalculeWithCompany) as CalculeStateType;
    const company = useSelector((rootReducer: RootState) => rootReducer.companyReducer) as CompanyStateType;

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState<CalculeStateType>(calcule);

    useEffect(() => { setInputs(calcule), console.log(calcule) }, [calcule]);
    useEffect(() => { dispatch(setAllInputs(inputs)) }, [inputs])

    const changeDefaultInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: Number(value) });
    }

    const handleChangeAdditional = (additionals: AdditionalType[]) => {
        setInputs({ ...inputs, additionals });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addCalculeToHistory({ ...calcule, result: service(calcule)}));
        dispatch(setAllInputs(company));
    }

    return (
        <form className={css['card']} onSubmit={onSubmit}>
            <div className={css['_default']}>
                <Input type="number" name="company_cost" placeholder="Custo da empresa (R$)" onChange={changeDefaultInput} value={inputs.company_cost} min={500} />
                <Input type="number" name="day_hours" placeholder="Horas por dia" onChange={changeDefaultInput} value={inputs.day_hours} min={1} />
                <Input type="number" name="days_in_week" placeholder="Dias por semana" onChange={changeDefaultInput} value={inputs.days_in_week} min={1} max={7} />
                <Input type="number" name="employees" placeholder="Funcionarios" onChange={changeDefaultInput} value={inputs.employees} min={1} />
                <Input type="number" name="profit_margin" placeholder="Margem de lucro (%)" onChange={changeDefaultInput} value={inputs.profit_margin} min={0} />
                <Input type="number" name="estimated_time" placeholder="Horas estimadas" onChange={changeDefaultInput} value={inputs.estimated_time} min={1} />
            </div>
            { <AdditionalBox data={inputs.additionals || []} onChangeAdditional={handleChangeAdditional} /> }

            <button className={css['button']} type="submit">Calcular</button>
        </form>
    )
}

export default FormCard;