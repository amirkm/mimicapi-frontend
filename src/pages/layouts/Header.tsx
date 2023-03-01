import Account from '@components/Account'
import Logo from '@components/Logo'
import { FC } from 'react'

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <div className="from-zink-700 to-zìnk-60 shadow border-b-2 border-gray-100 bg-gradient-to-t">
      <div className="flex items-center justify-between max-w-md py-6 mx-auto">
          <div className="w-24">
            <Logo />
          </div>
          <Account />
      </div>
    </div>
  )
}

export default Header
