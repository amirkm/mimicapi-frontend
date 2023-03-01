import useClickOutside from '@hooks/useClickOutside'
import { clearCookie } from '@utils/cookie'
import { FC, useRef } from 'react'

const HomeUrl = import.meta.env.VITE_HOME_URL

interface AccountFlyoutProps {
  onClose: Function
}

const AccountFlyout: FC<AccountFlyoutProps> = ({ onClose }) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useClickOutside(elementRef, onClose)

  const logOut = () => {
    clearCookie()
    window.location.href = HomeUrl
  }

  return (
    <div
      onClick={() => onClose()}
      ref={elementRef}
      className="z-10 mt-4 text-center transition duration-200 ease-out bg-white divide-y divide-gray-100 rounded-lg shadow select-none w-36 ring-1 ring-black ring-opacity-5"
    >
      <div className="p-2 truncate cursor-default bg-stone-200">Karl</div>
      <div className="w-full bg-gray-200"></div>
      <div onClick={logOut} className="p-2 cursor-pointer">
        Log out
      </div>
    </div>
  )
}

export default AccountFlyout
