import { FC } from 'react'

interface IToggleProps {
  isEnabled?: boolean
  onChange: (enabled: boolean) => void
}

const defaultProps: IToggleProps = {
  isEnabled: false,

  onChange: function (enabled: boolean): void {
    throw new Error('Function not implemented.')
  },
}

const Toggle: FC<IToggleProps> = ({ isEnabled = false, onChange }) => {
  const handleClick = () => {
    onChange(isEnabled)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative inline-flex flex-shrink-0 h-5 w-11 border-2 border-gray-400 rounded-full transition-colors focus:outline-none ${
        isEnabled ? 'bg-blue-600' : 'bg-gray-200'
      }`}
      data-testid="toggle-button"
    >
      <span
        aria-hidden="true"
        className={`inline-block h-4 w-4 rounded-full bg-white transform transition-transform ${isEnabled ? 'translate-x-6' : 'translate-x-0'}`}
      ></span>
    </button>
  )
}

Toggle.defaultProps = defaultProps
export default Toggle
