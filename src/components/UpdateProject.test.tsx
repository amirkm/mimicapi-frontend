import UpdateProject, { IUpdateProjectProps } from '@components/UpdateProject'
import { ErrorType } from '@enum/ErrorType'
import IProject from '@models/project'
import { RenderResult, fireEvent, getByTestId, render } from '@testing-library/react'
import { vi } from 'vitest'

describe('<UpdateProject />', () => {
  let props: IUpdateProjectProps
  let wrapper: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>

  beforeEach(() => {
    props = {
      isLoading: false,
      project: {} as IProject,

      onClose: vi.fn(),
      onUpdate: vi.fn(),
      onDelete: vi.fn(),
      onError: vi.fn(),
    }

    wrapper = render(<UpdateProject {...props} />)
  })

  it('should call the onClose function when cancel button is clicked', () => {
    const { getByTestId } = wrapper
    const cancelButton = getByTestId('cancel-button')

    fireEvent.click(cancelButton)

    expect(props.onError).not.toHaveBeenCalled()
    expect(props.onClose).toHaveBeenCalled()
  })

  it('should call the onDelete function when delete button is clicked', () => {
    const { getByTestId } = wrapper
    const deleteButton = getByTestId('delete-button')

    fireEvent.click(deleteButton)

    expect(props.onError).not.toHaveBeenCalled()
    expect(props.onDelete).toHaveBeenCalledWith(props.project._id)
  })

  it('should call the onUpdate function when save button is clicked', () => {
    const { getByTestId } = wrapper
    const toggleEnable = getByTestId('toggle-button')
    const titleInput = getByTestId('title-input')
    const saveButton = getByTestId('save-button')

    fireEvent.change(titleInput, { target: { value: 'newtitle' } })
    fireEvent.click(toggleEnable)
    fireEvent.click(saveButton)

    expect(props.onError).not.toBeCalledWith(ErrorType.ValidationError, expect.anything())
    expect(props.onError).not.toHaveBeenCalled()
    expect(props.onUpdate).toHaveBeenCalledWith({ ...props.project, title: 'newtitle', isEnabled: true })
  })
})
