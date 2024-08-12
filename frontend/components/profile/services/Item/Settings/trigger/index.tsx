import { DrawerTrigger } from "@/components/ui/drawer";
import css from "./trigger.module.scss"
import { Settings } from "lucide-react"

interface ProfileServiceTriggerProps {
    title: string
}

function ProfileServiceTrigger(props:ProfileServiceTriggerProps) {
    return (
        <div className={css["trigger"]}>
            <h3>{ props.title }</h3>
            <DrawerTrigger asChild>
                <button className={css["button"]}>
                    <Settings />
                </button>
            </DrawerTrigger>
        </div>
    )
}

export default ProfileServiceTrigger;