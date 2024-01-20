'use client';

import css from './style.module.scss'

import { useToast } from '@chakra-ui/react'
import { X } from 'lucide-react';

import { useUser } from '@/store/User';

import Link from 'next/link';
import NewService from '@/components/Pages/NewService';
import Button from '@/components/Button/Default'
import { useCurrentService } from '@/store/currentService';
import { redirect, useRouter } from 'next/navigation';

export default function ProfilePage() {
  const toast = useToast()
  const router = useRouter()
  const [updateServices] = useUser((store) => ([store.updateServices]))
  const [service, reset] = useCurrentService((store) => ([store.service, store.reset]))

  const handleSave = () => {
    console.log(service)
    if(!service.name) toast({ title: "Nome do serviço não pode ser vazio", status: "error" })
    else if(!service.profit_margin) toast({ title: "Margem de lucro não pode ser vazio", status: "error" })
    else if(!service.costs) toast({ title: "Custos não podem ser vazios", status: "error" })
  
    else {
      updateServices("add", service)
      toast({ title: "Serviço criado com sucesso", status: "success" })
      reset()
      router.push("/perfil")
    }
  }

  return (
    <div className={css['page']}>
      <div className={css["header"]}>
        <p>Perfil / <b>Novo serviço</b></p>

        <Link href="/perfil"><Button icon={X} variant="ghost" /></Link>
      </div>

      <div className={css["body"]}>
        <NewService.Data />
        <NewService.Costs onClick={handleSave} />
      </div>
    </div>
  )
}
