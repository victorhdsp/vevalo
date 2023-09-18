import css from "./style.module.scss"
import homeCalcule from "../Composer"
import { Settings, Sparkle } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import service from "@/assets/scripts/service";

import { HomeCalculeContent } from "./HomeCalculeContent"
import { HomeCalculeAdditionalBox } from "./HomeCalculeAdditionalBox"
import { Separator } from '@/components/ui/separator'
import { setHomeStage } from "@/redux/manager/slice"
import { addCalculeToHistory } from "@/redux/history/slice"
import { CalculeStateType } from "@/redux/calcule/types"
import { selectCalculeWithCompany } from "@/redux/calcule/calcule.selectors"

export const HomeCalculeForm = () => {
  const inputs: CalculeStateType = useSelector(selectCalculeWithCompany);
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addCalculeToHistory({ 
      ...inputs, 
      result: service(inputs)
    }));
  }

  return (
    <form className={css["HomeCalculeForm"]} onSubmit={handleSubmit}>
      <homeCalcule.header 
        title="Novo calculo" 
        icon={Settings}
        onChangeStage={() => dispatch(setHomeStage("settings"))}
      />

      <main className="flex flex-col gap-4">
        <HomeCalculeContent />
        <Separator />
        <HomeCalculeAdditionalBox />
      </main>

      <homeCalcule.footer 
        title="Calcular" 
        icon={Sparkle} 
      />
    </form>
  )
}