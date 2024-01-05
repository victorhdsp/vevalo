'use client';

import css from './style.module.scss'

interface Props {
  icon?: React.ElementType
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium'
  label?: string
  onClick?: () => void
}

const _Button = (props: Props) => {
  const variant = props.variant || 'primary'
  const size = props.size || 'medium'
  const Icon = props.icon
  const content = props.children || props.label || 'Button'
  const type = props.type || 'button'
  
  return (
    <button 
      data-variant={variant}
      data-size={size}
      className={css['button']}
      onClick={props.onClick}
      type={type}
    >
      <span>{ content }</span>
      { Icon && <Icon size={18}/> }
    </button>
  )
}

export default _Button;