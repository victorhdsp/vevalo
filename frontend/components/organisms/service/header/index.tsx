"use client";

import Header from "@/components/molecules/header";
import { Users } from "lucide-react"

const variants = {service: {
        Icon: Users,
        description: "Planejando um serviço"
    },
    input: {
        Icon: Users,
        description: "Modificando um campo"
    },
}

interface HeaderServiceProps {
    variant: (keyof typeof variants),
    title: string
}

function HeaderUser(props: HeaderServiceProps) {

  return (
    <Header
        Icon={variants[props.variant].Icon}
        title={props.title}
        description={variants[props.variant].description}
    />
  );
}

export default HeaderUser;