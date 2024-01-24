import { ChevronLeft, ChevronRight, Save } from 'lucide-react'
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
import { calculeWeeklyHoursPerDay } from '@/assets/utils/number';

interface Props {
  onChange?: (worked_hours: number) => void;
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
  
    const hoursPerDay = calculeWeeklyHoursPerDay(weekly_hours)
    props.onChange && props.onChange(Math.ceil(days * hoursPerDay))
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
          align='end'
          sideOffset={-50}
        >
          <Card orientation='vertical' className={css['card']}>
            <DateRangePicker 
              classNames={{
                dateRangePickerWrapper: css["calendar"],
                definedRangesWrapper: css["defined-ranges-wrapper"],
                month: "min-w-[100%] max-w-[var(--width)]",
                weekDays: "gap-x-xs",
                days: "justify-between"
              }}
              ranges={[selectedRange]}
              locale={ptBR}
              staticRanges={[]}
              inputRanges={[]}
              onChange={handleSelect}
            />
            <Popover.Close className={css["close"]} asChild>
              <Button icon={Save}>Salvar</Button>
            </Popover.Close>
          </Card>
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}

export default BudgetCalendarRange