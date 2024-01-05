'use client';

import css from './style.module.scss'

interface Props {
  icon: React.ElementType
  variant?: 'primary' | 'secondary' | 'invisible' | 'danger'
  size?: 'small' | 'medium' | 'large' | 'none'
  onClick?: () => void
}

const IconButton = (props: Props) => {
  const variant = props.variant || 'primary'
  const size = props.size || 'medium'
  const Icon = props.icon
  
  return (
    <button 
      data-variant={variant}
      data-size={size}
      className={css['button']}
      onClick={props.onClick}
      type='button'
    >
      <Icon className={css['icon']} />
    </button>
  )
}

export default IconButton;