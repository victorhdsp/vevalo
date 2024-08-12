"use client";

import InputFileLogo from "@/components/profile/inputs/FileLogo";
import css from "./profile.module.scss";
import { TabsContent } from "@/components/ui/tabs";
import Input from "@/components/profile/inputs/Default";
import IncrementalNumber from "@/components/profile/inputs/IncrementalNumber";
import InputWeek from "@/components/profile/inputs/Week";

export default function Content() {
    return (
        <TabsContent value="profile">
            <div className={css["root"]}>
                <div className={css["identity"]}>
                    <InputFileLogo size={20} />
                    <Input 
                        name="company" 
                        placeholder="Qual o nome da sua empresa?"
                        label="Nome da empresa"
                    />
                </div>
                <div className={css["costs"]}>
                    <IncrementalNumber
                        label="Custo mensal"
                        valueModifier={500}
                        defaultValue={2000}
                    />
                </div>
                <div className={css["week"]}>
                    <InputWeek
                        label="Dias trabalhados"
                    />
                </div>
            </div>
        </TabsContent>
    )
}