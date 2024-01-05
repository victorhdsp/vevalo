import css from './style.module.scss';

import Button from '@/components/Button/Default';
import Card from '@/components/Card';
import Label from '@/components/Label';

import { Trash } from 'lucide-react';
import { makeFinance } from '@/assets/utils/number';

import { BudgetTypes } from '@/assets/data/type';
import { useCurrentProject } from '@/store/currentProject';

interface Props {
  item: BudgetTypes;
  hiddenFooter?: boolean
}

const Budget = ({ item, hiddenFooter }: Props) => {
  const [removeBudget] = useCurrentProject((store) => ([store.removeBudget]))
  const result = item.result

  if (!result) return null;
  
  const data = {
    name: item.service.name,
    cost: {
      admin: makeFinance(result.cost.admin),
      salary: makeFinance(result.cost.salary),
      total: makeFinance(result.cost.total)
    },
    received: makeFinance(result.received),
    discount: makeFinance(result.discount),
    workedHours: item.worked_hours,
    total: makeFinance(result.total),
  }
  
  const handleClickToDeleteItem = () => removeBudget(item.id)

  return (
    <Card 
      className={css["Budget"]} 
      orientation="vertical"
    >
      <div className={css["body"]}>
        <div className={css["header"]}>
          <h3>{ data.name }</h3>
        </div>

        <div className={css["content"]}>
          <div className={css["description"]}>
            <p>
              <Label 
              label={`Produção: ${ data.cost.total }`}
              help={`
                Administrativo ${data.cost.admin}
                Salário ${data.cost.salary}
              `} 
              />
            </p>
            <p>Lucro: { data.received }</p>
            <p>Desconto: { data.discount }</p>
          </div>
          
          <div className={css["result"]}>
            <p>{ data.workedHours } Horas</p>
            <strong>{ data.total }</strong>
          </div>
        </div>
      </div>

      { !hiddenFooter && (
        <div onClick={handleClickToDeleteItem} className={css["footer"]}>
          <Button icon={Trash} variant='danger' size='small'>
            Deletar
          </Button>
        </div>
        )
      }
    </Card>
  );
};

export default Budget;