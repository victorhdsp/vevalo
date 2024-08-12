"use client";

import css from "../user.module.scss";
import { TabsTrigger } from "@/components/ui/tabs";

export default function Trigger() {
    return (
        <TabsTrigger 
            className={css["trigger"]}
            value="profile"
        >
            Perfil
        </TabsTrigger>
    )
}