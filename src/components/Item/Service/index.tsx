import css from './style.module.scss';

import ButtonIcon from '@/components/Button/Icon';
import Card from '@/components/Card';

import { Star, MoreHorizontal } from 'lucide-react';
import { ServiceType } from '@/assets/data/type';
import EditOrDelete from '@/components/Popover/EditOrDelete';
import { useUser } from '@/store/User';

interface Props {
  item: ServiceType;
  onClick?: () => void;
}

const Service = ({ item }: Props) => {
  const [removeService] = useUser(store => [store.removeService])

  const data = {
    name: item.name,
    costs: item.costs,
    profit_margin: item.profit_margin
  }

  const handleClickToDeleteItem = () => removeService(item.id)

  return (
    <Card 
      className={css["Service"]} 
      orientation="vertical"
    >
      <div className={css["body"]}>
        <div className={css["header"]}>
          <h3>{ data.name }</h3>
          <EditOrDelete
            onClickInDelete={handleClickToDeleteItem}
          >
            <ButtonIcon 
              icon={MoreHorizontal} 
              variant='invisible' 
              size='none'
            />
          </EditOrDelete>
        </div>

        <div className={css["content"]}>
          <p>Custos de Produção:</p>
          <ul>
            { data.costs.map((cost, index) => (
              <li key={index}>{ cost.name }</li>
            )) }
          </ul>
        </div>
      </div>

      <div className={css["footer"]}>
        <strong>{ data.profit_margin }</strong>
        <ButtonIcon 
          icon={Star} 
          variant='invisible' 
          size='none'
        />
      </div>
    </Card>
  );
};

export default Service;