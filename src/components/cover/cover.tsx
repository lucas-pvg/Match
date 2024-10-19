import { ComponentProps } from 'react'
import CoverImage from '../../assets/cover.png'
import style from './cover.module.css'

interface CoverProps extends ComponentProps<'img'> {
  image?: boolean
  blur?: boolean
  size?: number
  className?: string
}

export function Cover({ image=true, blur=true, size=220, className, ...props }: CoverProps) {
  const classes = `${className ? `${style.cover} ${className}` : `${style.cover}`}`
  
  return (
    <div className={style.container} style={{ width: size, height: size }}>
      {
        image &&
        <img 
          src={CoverImage}
          className={classes}
          style={{ width: size, height: size }}
          {...props}
        />
      }

      {
        blur && 
        <img 
          src={CoverImage}
          className={`${classes} ${style.blur}`}
          style={{ width: size, height: size }}
          {...props}
        />
      }
    </div>
  )
}
