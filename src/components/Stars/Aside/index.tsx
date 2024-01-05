'use client';

import css from './style.module.scss'

import AsideMenu from './parts/AsideMenu';
import Card from '@/components/Card'

const Aside = () => {

  return (
    <aside className={css["outside"]}>
      <div className={css["inside"]}>
        <Card className='w-full h-full'>
          <menu type="toolbar">
            <ul>
              <AsideMenu />
            </ul>
          </menu>
        </Card>
      </div>
    </aside>
  );
}

export default Aside;