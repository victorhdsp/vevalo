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
  className?: string
}

const _Button = (props: Props) => {
  const variant = props.variant || 'primary'
  const size = props.size || 'medium'
  const Icon = props.icon
  const content = props.children || props.label
  const type = props.type || 'button'
  
  return (
    <button 
      data-variant={variant}
      data-size={size}
      className={`${css['button']} ${props.className || ''}`}
      onClick={props.onClick}
      type={type}
    >
      { content && <span data-pad={content?true:false} className={css["content"]}>{ content }</span> }
      { Icon && <span data-pad={content?true:false} className={css["icon"]}><Icon size={18}/></span> }
    </button>
  )
}

export default _Button;