import css from './style.module.scss'
import { ReactSVG } from 'react-svg'

interface Props {
  className?: string
  type?: 'default' | 'alt'
}

const Logo = (props: Props) => {
  const type = props.type || 'default'

  const getSrc = () => {
    switch (type) {
      case 'alt': return '/svg/logo-alt.svg'
      default: return '/svg/logo.svg'
    }
  }

  return (
    <ReactSVG 
      src={getSrc()} 
      className={`${css["logo"]} ${props.className}`} 
    />
  )
}

export default Logo