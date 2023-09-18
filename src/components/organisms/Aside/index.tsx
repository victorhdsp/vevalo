import { Home } from "lucide-react"
// import { Home, Library, Settings } from "lucide-react"
import aside from "./Composer"

export const Aside = () => {  
  return (
    <aside.root>
        <aside.button icon={Home} label="Home" name="home"/>
        {/* <aside.button icon={Library} label="Histórico" name="history" /> */}
        {/* <aside.button icon={Settings} label="Configurações" name="settings" /> */}
    </aside.root>
  )
}