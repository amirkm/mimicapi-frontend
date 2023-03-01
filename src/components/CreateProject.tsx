import { TooltipInfo } from '@components/Tooltip'
import Button from '@components/shared/Button'
import Toggle from '@components/shared/Toggle'
import { ErrorType } from '@enum/ErrorType'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import CreateProjectDTO from '@models/dto/CreateProjectDTO'
import classNames from 'classnames'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface IFormValues {
  title: string
}

export interface ICreateProjectProps {
  isLoading?: boolean
  onClose: () => void
  onCreate: (project: CreateProjectDTO) => void
  onError: (type: ErrorType, errors: string[]) => void
}

const defaultProps: ICreateProjectProps = {
  isLoading: false,
  onClose: function (): void {
    throw new Error('Function not implemented.')
  },
  onCreate: function (project: CreateProjectDTO): void {
    throw new Error('Function not implemented.')
  },
  onError: function (type: ErrorType, errors: string[]): void {
    throw new Error('Function not implemented.')
  },
}

const CreateProject: FC<ICreateProjectProps> = (props) => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {
      title: '',
    },
  })
  const [isEnabled, setIsEnabled] = useState<boolean>(false)

  useEffect(() => {
    setFocus('title')
  }, [])

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    props.onCreate({ ...data, isEnabled })
  }

  return (
    <div className="flex flex-col pt-2 leading-tight text-gray-700 bg-white border appearance-none sm:rounded-lg focus:outline-none focus:shadow-outline sm:max-w-sm drop-shadow">
      <header className="flex items-center justify-between px-2 pt-2 pb-4 border-b border-solid border-b-gray-200">
        <Toggle isEnabled={isEnabled} onChange={() => setIsEnabled(!isEnabled)} />
        <h2 className="text-xl font-bold text-gray-700">Create Project</h2>
        <div className="pl-2 w-7" />
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className="px-4 my-10">
          <label className="block font-bold text-gray-700">
            Title <i className="text-red-600 ">*</i>
            <div
              className={classNames('relative flex w-full px-3 py-2 mt-2 leading-tight border rounded shadow', {
                'border border-red-400': errors.title,
              })}
            >
              <input
                className="flex-1 pr-2 text-gray-600 appearance-none focus:outline-none focus:shadow-outline"
                aria-labelledby="title"
                aria-label="title"
                type="text"
                {...register('title', { required: true, pattern: { value: /^[A-Za-z0-9]+$/, message: 'Only alphanumeric allowed' } })}
                data-testid="title-input"
              />
              <TooltipInfo content={<div className="p-4 text-sm rounded drop-shadow-md bg-slate-100">Only alphanumeric allowed</div>}>
                <InformationCircleIcon onClick={() => toast.info} className="inline cursor-pointer h-7" />
              </TooltipInfo>
            </div>
          </label>
        </main>
        <footer>
          <div className="flex items-center justify-between">
            <Button className="rounded-none rounded-tr-2xl" color="secondary" type="submit" isSubmiting={props.isLoading} data-testid="create-button">
              Create
            </Button>
            <button
              disabled={props.isLoading}
              className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
              type="button"
              onClick={props.onClose}
              data-testid="cancel-button"
            >
              Cancel
            </button>
          </div>
        </footer>
      </form>
    </div>
  )
}

CreateProject.defaultProps = defaultProps

export default CreateProject
