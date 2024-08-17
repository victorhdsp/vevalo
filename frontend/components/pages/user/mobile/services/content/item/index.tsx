import { Button } from "@/components/ui/button"
import css from "./item.module.scss"
import { Settings } from "lucide-react";

interface ServiceItemProps {
    title: string;
}

function ServiceItem(props: ServiceItemProps) {
    return (
        <div className={css["root"]}>
            <h3>{ props.title }</h3>
            <Button 
                size="icon"
                onClick={() => {}}
                className={css["button"]}
                name="increase"
            >
                <Settings/>
            </Button>
        </div>
    )
}

export default ServiceItem;