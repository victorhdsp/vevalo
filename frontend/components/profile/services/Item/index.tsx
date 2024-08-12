import { Drawer } from "@/components/ui/drawer";
import ProfileServiceTrigger from "./Settings/trigger";
import ProfileServiceContent from "./Settings/content";
import { ServiceInput } from "@/lib/types";

interface ProfileServiceItemProps {
    title: string
    items: ServiceInput[]
}

function ProfileServiceItem(props:ProfileServiceItemProps) {

    return (
        <Drawer direction="right">
            <ProfileServiceTrigger 
                title={props.title} 
            />
            <ProfileServiceContent 
                title={props.title} 
                items={props.items} 
            />
        </Drawer>
    )
}

export default ProfileServiceItem;