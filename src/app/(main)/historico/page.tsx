'use client';

import css from './style.module.scss'

import History from '@/components/Pages/History'
import { useToast } from '@chakra-ui/react'

import { useUser } from '@/store/User';
import { useState } from 'react';

export default function Calculadora() {
  return (
    <div className={css['page']}>
      <History />
    </div>
  )
}
