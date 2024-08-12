import css from "./content.module.scss";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Settings } from "lucide-react";
import { ServiceInput } from "@/lib/types";

interface ProfileServiceContentItemProps {
    item: ServiceInput
}

function ProfileServiceContentItem({item}:ProfileServiceContentItemProps) {
    return (
        <div className={css["item"]}>
            <p>{ item.label }</p>
            <div className={css["selection"]}>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue 
                            placeholder={item.options[0].label}
                        />
                    </SelectTrigger>
                    <SelectContent>
                        {item.options.map((option) => (
                            <SelectItem key={option.id} value={option.key}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <button className={css["button"]}>
                    <Settings />
                </button>
            </div>
        </div>
    )
}

export default ProfileServiceContentItem;