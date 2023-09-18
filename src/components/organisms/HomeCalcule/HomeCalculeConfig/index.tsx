import css from "./style.module.scss"
import homeCalcule from "../Composer"
import { Save, X } from "lucide-react"
import { useDispatch } from "react-redux"

import { HomeCalculeContent } from "./HomeCalculeContent"
import { setHomeStage } from "@/redux/manager/slice"
import { Separator } from "@/components/ui/separator"
import { HomeCalculeAdditionalBox } from "./HomeCalculeAdditionalBox"

export const HomeCalculeConfig = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setHomeStage("calcule"))
  }

  return (
    <form className={css["HomeCalculeConfig"]} onSubmit={handleSubmit}>
      <homeCalcule.header 
        title="Sobre a empresa" 
        icon={X} 
        onChangeStage={() => dispatch(setHomeStage("calcule"))}
      />

      <main className="flex flex-col gap-4">
        <HomeCalculeContent />
        <Separator />
        <HomeCalculeAdditionalBox  />
      </main>

      <homeCalcule.footer 
        title="Salvar" 
        icon={Save}
      />
    </form>
  )
}