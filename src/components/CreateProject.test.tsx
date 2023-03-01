import CreateProject, { ICreateProjectProps } from '@components/CreateProject'
import { ErrorType } from '@enum/ErrorType'
import IProject from '@models/project'
import { RenderResult, fireEvent, getByTestId, render } from '@testing-library/react'
import debug from 'debug'
import { vi } from 'vitest'
import * as Yup from 'yup'

describe('<CreateProject />', () => {
  let props: ICreateProjectProps
  let wrapper: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>

  beforeEach(() => {
    props = {
      isLoading: false,
      onClose: vi.fn(),
      onCreate: vi.fn(),
      onError: vi.fn(),
    }

    // wrapper = render(<CreateProject {...props} />)
  })

  it('should call the onClose function when cancel button is clicked', () => {
    const { getByTestId } = wrapper
    const cancelButton = getByTestId('cancel-button')

    fireEvent.click(cancelButton)

    expect(props.onError).not.toHaveBeenCalled()
    expect(props.onClose).toHaveBeenCalled()
  })

  it('should call the onCreate function when create button is clicked', () => {
    const { getByTestId } = wrapper
    const toggleEnable = getByTestId('toggle-button')
    const titleInput = getByTestId('title-input')
    const createButton = getByTestId('create-button')

    fireEvent.change(titleInput, { target: { value: 'newtitle' } })
    fireEvent.click(toggleEnable)
    fireEvent.click(createButton)

    expect(props.onError).not.toBeCalledWith(ErrorType.ValidationError, expect.anything())
    expect(props.onError).not.toHaveBeenCalled()
    expect(props.onCreate).toHaveBeenCalled()
    expect(props.onCreate).toHaveBeenCalledWith(expect.objectContaining({ title: 'newtitle', isEnabled: true }))
  })
})
