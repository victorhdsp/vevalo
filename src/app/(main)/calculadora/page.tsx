'use client';

import css from './style.module.scss'

import Calculator from '@/components/Pages/Calculator'
import { useToast } from '@chakra-ui/react'

import { useUser } from '@/store/User';
import { useState } from 'react';

export default function Calculadora() {
  return (
    <div className={css['page']}>
      <Calculator.Project />
      <Calculator.Resume />
    </div>
  )
}
