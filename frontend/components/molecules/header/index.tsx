import css from "./header.module.scss"
import React from "react";

export interface HeaderProps {
    Icon: React.ElementType;
    title: string
    description: string
}

export default function Header({Icon, ...props}: HeaderProps) {
    
    return (
        <header className={css["root"]}>
            <div className={css["content"]}>
                <div className={css["icon_box"]}>
                    <Icon size={28} />
                </div>
                <h2>{ props.title }</h2>
                <p>{ props.description }</p>
            </div>
        </header>
    )
}