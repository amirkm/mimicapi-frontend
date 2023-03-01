import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'danger'
  className?: string
  noPadding?: boolean
  isSubmiting?: boolean
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({ className = '', color, noPadding = false, disabled = false, isSubmiting = false, children, ...props }) => {
  return (
    <button
      disabled={disabled || isSubmiting}
      className={classNames(
        ' font-medium rounded   focus:outline-none focus:shadow-outline transition ease-in-out duration-150',
        !noPadding && 'px-4 py-2',
        color && `text-white`,
        color === 'primary' && 'bg-blue-600 hover:bg-blue-700',
        color === 'secondary' && 'bg-green-600 hover:bg-green-700',
        color === 'danger' && 'bg-red-600 hover:bg-red-700',
        disabled || isSubmiting ? 'cursor-not-allowed' : '',
        className ? className : ''
      )}
      {...props}
    >
      <div className={classNames({ 'animate-pulse': isSubmiting })}>{children}</div>
    </button>
  )
}

export default Button
