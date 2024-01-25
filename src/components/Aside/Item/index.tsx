'use client';

import css from './style.module.scss'

import { LucideIcon, ChevronRight } from 'lucide-react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

interface Props {
  icon: LucideIcon;
  title: string;
  href: string;
  hasChevron?: boolean;
}

export const AsideItem = ({icon:Icon, title, href, hasChevron}:Props) => {
  const rootClassName = [css["root"]];
  
  const pathname = usePathname()
  if (pathname === href) rootClassName.push(css["active"])

  return (
    <li className={rootClassName.join(' ')}>
      <Link href={href} className={css["item"]}>
        <span className={css["icon"]}><Icon /></span>
        <span className={css["label"]}>{ title }</span>
        <span className={css["chevron"]}>
          { hasChevron && <ChevronRight /> }
        </span>
      </Link>
    </li>
  )
} 