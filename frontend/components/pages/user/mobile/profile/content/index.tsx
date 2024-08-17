"use client";

import InputFileLogo from "@/components/atoms/InputFileLogo";
import css from "./profile.module.scss";
import Input from "@/components/atoms/Input";
import IncrementalNumber from "@/components/atoms/InputNumber";
import InputWeek from "@/components/molecules/InputWeek";

export default function Content() {
    return (
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
    )
}