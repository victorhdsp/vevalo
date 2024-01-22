import { ChevronLeft, ChevronRight } from 'lucide-react'
import css from './style.module.scss'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useState } from 'react';
import { DateRangePicker, RangeKeyDict, ClassNames } from 'react-date-range';
import ptBR from 'date-fns/locale/pt-BR';

import * as Popover from '@radix-ui/react-popover';
import Button from '@/components/Button/Default'
import Input from '@/components/Form/Input';
import Card from '@/components/Card';

import { useCurrentBudget } from '@/store/currentBudget';
import { useUser } from '@/store/User';
import { calculeWeeklyHours } from '@/assets/utils/number';

interface Props {

}

type SelectionRange = {
  startDate: Date;
  endDate: Date;
  key: string;
}


function BudgetCalendarRange (props: Props) {
  const [updateBudget] = useCurrentBudget(store => [store.updateBudget])
  const [weekly_hours] = useUser(store => [store.user.profile.fiscal.weekly_hours])


  const [selectedRange, setSelectedRange] = useState<SelectionRange>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })

  function handleSelect(ranges:RangeKeyDict) {
    const RangeSelection = ranges.selection as SelectionRange
    setSelectedRange(RangeSelection)

    const days = Math.ceil((RangeSelection.endDate.getTime() - RangeSelection.startDate.getTime()) / (1000 * 3600 * 24)) + 1
  
    const hoursPerDay = calculeWeeklyHours(weekly_hours)

    updateBudget("worked_hours", `${Math.ceil(days * hoursPerDay)}`)
  }

  return (
    <div className={css["root"]}>
      <Popover.Root>
        <Popover.Trigger>
          <div className={css["trigger"]}>
            <Input
              name='worked_hours'
              label="Dias estimados"
              value={`${selectedRange.startDate.toLocaleDateString()} - ${selectedRange.endDate.toLocaleDateString()}`}
              readOnly
              required
            />
          </div>
        </Popover.Trigger>
        <Popover.Content 
          side="bottom" 
          sideOffset={-50}
        >
          <Card orientation='vertical' className={css['card']}>
            <DateRangePicker 
              classNames={{
                dateRangePickerWrapper: css["calendar"],
                definedRangesWrapper: css["defined-ranges-wrapper"],
                month: "min-w-[100%]"
              }}
              ranges={[selectedRange]}
              locale={ptBR}
              staticRanges={[]}
              inputRanges={[]}
              onChange={handleSelect}
            />
          </Card>
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}

export default BudgetCalendarRange