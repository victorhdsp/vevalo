"use client";

import Header from "@/components/molecules/header";
import { Users } from "lucide-react"

const variants = {
    profile: {
        Icon: Users,
        title: "Perfil",
        description: "Informações da empresa"
    },
    services: {
        Icon: Users,
        title: "Perfil",
        description: "Modificando serviços"
    },
    service: {
        Icon: Users,
        title: "Perfil",
        description: "Planejando um serviço"
    },
    input: {
        Icon: Users,
        title: "Perfil",
        description: "Modificando um campo"
    },
}

interface HeaderServiceProps {
    variant: (keyof typeof variants)
}

function HeaderUser(props: HeaderServiceProps) {

  return (
    <Header
        Icon={variants[props.variant].Icon}
        title={variants[props.variant].title}
        description={variants[props.variant].description}
    />
  );
}

export default HeaderUser;