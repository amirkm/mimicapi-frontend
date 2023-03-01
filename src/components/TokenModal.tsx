import ConfirmModal from '@components/ConfirmModal'
import Modal from '@components/shared/Modal'
import Portal from '@components/shared/Portal'
import { useModal } from '@hooks/useModal'
import { FC } from 'react'
import { toast } from 'react-toastify'

type ITokenModalProps = {
  token: string

  onClose: () => void
  onGenerateToken: () => void
}

const defaultProps: ITokenModalProps = {
  token: '',

  onClose: function (): void {
    throw new Error('Function not implemented.')
  },
  onGenerateToken: function (): void {
    throw new Error('Function not implemented.')
  },
}

const TokenModal: FC<ITokenModalProps> = (props) => {
  const [isConfirmModalOpen, openConfirmModal, closeConfirmModal] = useModal()
  const hasToken = props.token?.length > 0

  const handleConfirm = () => {
    closeConfirmModal()
    props.onGenerateToken()
  }

  const handleCopy = () => {
    if (hasToken) {
      navigator.clipboard.writeText(props.token)
      toast.success('Token copied to clipboard')
      props.onClose()
      return
    }

    toast.info('No token exists')
  }

  return (
    <Modal onClose={props.onClose}>
      <p className="h-20 p-4 m-6 overflow-y-auto text-sm leading-5 text-center text-gray-500 break-all">
        {hasToken ? props.token : 'No token exists'}
      </p>
      <div className="flex text-center">
        <button
          type="button"
          className="px-4 py-2 font-bold text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          onClick={() => openConfirmModal()}
        >
          New Token
        </button>

        <p className="flex-1 p-2 text-center bg-gray-100 rounded-sm cursor-pointer hover:bg-gray-200" onClick={handleCopy}>
          <button className="mx-auto text-sm font-medium leading-5 text-gray-500 hover:text-gray-600 focus:outline-none">Copy</button>
        </p>
      </div>
      <Portal>
        <div className='w-12'>
          {isConfirmModalOpen && (
            <ConfirmModal
              title="Generate New Token"
              description="Access to APIs cannot be obtained using an old token after generating a new one"
              onConfirm={handleConfirm}
              onClose={closeConfirmModal}
            />
          )}
        </div>
      </Portal>
    </Modal>
  )
}

TokenModal.defaultProps = defaultProps

export default TokenModal
