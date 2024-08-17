"use client";

import { Service } from "@/lib/types";
import css from "./service.module.scss";
import ServiceItem from "./item";
import Link from "next/link";

interface ServiceContentProps {
    items: Service[]
}

export default function Content(props: ServiceContentProps) {
    return (
        <div className={css["root"]}>
            {props.items.map(item => (
                <Link 
                    key={item.id} 
                    href={`servico/${item.id}`}
                    className={css["service"]}
                >
                    <ServiceItem title={item.title} />
                </Link>
            ))}
        </div>
    )
}