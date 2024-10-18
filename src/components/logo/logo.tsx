import LogoSVG from '../../assets/match-logo.svg?react'
import style from './logo.module.css'

interface LogoProps {
  size?: number
  icon?: boolean
  label?: boolean
  className?: string
}

export function Logo({ size, icon=true, label=true, className }: LogoProps) {
  const classes = `${className ? `${style.logo} ${className}` : `${style.logo}`}`
  
  return (
    <div className={classes}>
      { icon && <LogoSVG style={{ width: size || '50px', height: 'auto' }} />}
      { label && <h1 className={style.h1} >Match!</h1> }
    </div>
  )
}
