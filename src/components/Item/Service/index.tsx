import css from './style.module.scss';

import ButtonIcon from '@/components/Button/Icon';
import Card from '@/components/Card';

import { Star, MoreHorizontal } from 'lucide-react';
import { ServiceTypes } from '@/assets/data/type';

interface Props {
  item: ServiceTypes;
  onClick?: () => void;
}

const Service = ({ item }: Props) => {
  
  const data = {
    name: item.name,
    costs: item.costs,
    profit_margin: item.profit_margin
  }

  return (
    <Card 
      className={css["Service"]} 
      orientation="vertical"
    >
      <div className={css["body"]}>
        <div className={css["header"]}>
          <h3>{ data.name }</h3>
          <ButtonIcon 
            icon={MoreHorizontal} 
            variant='invisible' 
            size='small'
          />
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
          size='small'
        />
      </div>
    </Card>
  );
};

export default Service;