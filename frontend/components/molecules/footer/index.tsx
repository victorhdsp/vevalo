import { Button } from "@/components/ui/button";
import css from "./footer.module.scss"
import React, { MouseEventHandler } from "react";
import { Save } from "lucide-react";

export interface FooterProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Footer(props: FooterProps) {
    
    return (
        <footer className={css["root"]}>
            <div className={css["content"]}>
                <Button 
                    className={css["button"]}
                    onClick={props.onClick}
                >
                    <Save size={28} strokeWidth={1.3} />
                </Button>
            </div>
        </footer>
    )
}