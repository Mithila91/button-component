import style from './Button.module.scss'
import classNames from 'classnames'

type ButtonProps = {
  children: React.ReactNode
  type?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'xs'
  onClick?: React.MouseEventHandler
}

export default function Button({
  children,
  size,
  type = 'default',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames(style.button, style[type], style[size])}
      {...rest}
    >
      {children}
    </button>
  )
}
