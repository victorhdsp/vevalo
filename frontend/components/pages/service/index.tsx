"use client";

import css from "./user.module.scss"
import HeaderUser from "@/components/organisms/service/header";
import Footer from "@/components/molecules/footer";
import { Service } from "@/lib/types";

interface ServicePageMobileProps extends Service {
  
}

export default function ServicePageMobile(props: ServicePageMobileProps) {
  const handleSave = () => {

  }

  return (
    <main className={css["root"]}>
        <HeaderUser 
            title={props.title} 
            variant="service"
        />
        <div className={css["inputs"]}>
            {props.inputs.map((input) => (
                <div key={input.id}>
                    { input.label }
                </div>
            ))}
        </div>
        <Footer onClick={handleSave} />
    </main>
  );
}