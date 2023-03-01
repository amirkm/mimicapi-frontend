import AccountFlyout from '@components/AccountFlyOut'
import Avatar from '@components/shared/Avatar'
import { FC, useState } from 'react'
import { usePopper } from 'react-popper'

interface AccountProps {}

const Account: FC<AccountProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [tooltipElement, setTooltipElement] = useState<any>(null)
  const [arrowElement, setArrowElement] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  const { styles, attributes } = usePopper(tooltipElement, arrowElement, { placement: 'auto' })

  return (
    <div className="relative" ref={setTooltipElement}>
      <Avatar
        onClick={() => setIsVisible(true)}
        imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
        altText="Avatar"
      />
      {isVisible && (
        <div className="z-10" ref={setArrowElement} style={styles.popper} {...attributes.popper}>
          <div style={styles.arrow} />
          <AccountFlyout onClose={() => setIsVisible(false)} />
        </div>
      )}
    </div>
  )
}

export default Account
