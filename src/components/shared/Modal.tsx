import { FC, ReactElement } from 'react'

type ReactText = string | number
type ReactChild = ReactElement | ReactElement[] | ReactText

type ITokenModalProps = {
  children: ReactChild
  onClose?: () => void
}

const defaultProps: ITokenModalProps = {
  children: '',
}

const Modal: FC<ITokenModalProps> = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75">
      <div className="absolute w-full h-full bg-gray-800 opacity-30" onClick={props.onClose}></div>
      <section className="bg-white rounded-lg min-w-[320px] z-10 max-w-md">
        <header className="relative">
          <div className="absolute top-0 right-0 p-2">
            <button className="text-gray-400 hover:text-gray-500 focus:outline-none" onClick={props.onClose}>
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 8.586L3.414 2 2 3.414 8.586 10 2 16.586 3.414 18l6.586-6.586L16.586 18 18 16.586 11.414 10 18 3.414 16.586 2z"
                />
              </svg>
            </button>
          </div>
          <h3 className="w-full py-2 text-lg font-medium leading-6 text-center text-gray-500 bg-gray-200">Token</h3>
        </header>
        <main>
          <div className="text-center sm:text-left">{props.children}</div>
        </main>
      </section>
    </div>
  )
}

Modal.defaultProps = defaultProps

export default Modal
