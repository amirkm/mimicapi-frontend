import { FC } from 'react'

type ConfirmModalProps = {
  title: string
  description: string
  onConfirm: () => void
  onClose: () => void
}

const ConfirmModal: FC<ConfirmModalProps> = ({ title, description, onConfirm, onClose }) => {
  const handleConfirm = () => {
    onConfirm()
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={handleClose} />

      <div className="z-10 overflow-hidden bg-white rounded-lg">
        <div className="mb-4">
          <h3 className="w-full py-2 text-lg font-medium leading-6 text-center text-gray-500 bg-gray-200">{title}</h3>
          <p className="p-4 my-6 text-sm text-gray-500">{description}</p>
        </div>

        <div className="flex justify-between">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-600 rounded-tl-2xl hover:bg-red-700 focus:outline-none"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
