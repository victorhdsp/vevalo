import css from './form.module.scss'

import Input from "../../Input";
import AdditionalBox from "../AdditionalBox";
import { useDispatch, useSelector } from "react-redux";
import service from "../../../assets/scripts/service";

import { changeUniqueInput, setAllInputs } from "../../../redux/calcule/slice";
import { AdditionalType, CalculeStateType } from "../../../redux/calcule/types";
import { addCalculeToHistory } from "../../../redux/history/slice";
import { CompanyStateType } from "../../../redux/company/slice";
import { RootState } from "../../../redux/store";
import { selectCalculeWithCompany } from "../../../redux/calcule/calcule.selectors";

import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

function FormCard() {
    const inputs = useSelector(selectCalculeWithCompany) as CalculeStateType;
    const company = useSelector((rootReducer: RootState) => rootReducer.companyReducer) as CompanyStateType;

    const dispatch = useDispatch();

    const changeDefaultInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(changeUniqueInput({ name, value }))
    }

    const handleChangeAdditional = (additionals: AdditionalType[]) => {
        dispatch(changeUniqueInput({ name: 'additionals', value: additionals }))
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
                <Input type="number" name="days_in_week" placeholder="Dias por semana" onChange={changeDefaultInput} value={inputs.days_in_week} min={1} max={7} />
                <Input type="number" name="employees" placeholder="Funcionarios" onChange={changeDefaultInput} value={inputs.employees} min={1} />
                <Input type="number" name="profit_margin" placeholder="Margem de lucro (%)" onChange={changeDefaultInput} value={inputs.profit_margin} min={0} />
                <Input type="number" name="estimated_time" placeholder="Horas estimadas" onChange={changeDefaultInput} value={inputs.estimated_time} min={1} />
            </div>
            { <AdditionalBox elements={inputs.additionals || []} onChangeAdditional={handleChangeAdditional} /> }

            <Button type="submit">
              Calcular
              <Sparkle className="w-4 h-4 ml-2" />
            </Button>
        </form>
    )
}

export default FormCard;