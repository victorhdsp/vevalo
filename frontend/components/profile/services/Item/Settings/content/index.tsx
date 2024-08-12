import css from "./content.module.scss";
import {  DrawerContent } from "@/components/ui/drawer";
import { ServiceInput } from "@/lib/types";
import ProfileServiceContentItem from "./item";

interface ProfileServiceContentProps {
    title: string,
    items: ServiceInput[]
}

function ProfileServiceContent(props:ProfileServiceContentProps) {
    return (
        <DrawerContent className={css["content"]}>
            <div className={css["settings"]}>
                <h2>{props.title}</h2>
                <div className={css["items"]}>
                    {props.items.map((item) => (
                        <ProfileServiceContentItem
                            item={item}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </DrawerContent>
    )
}

export default ProfileServiceContent;