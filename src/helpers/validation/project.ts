import * as Yup from 'yup'

interface IFormValues {
  title: string
  isEnabled: boolean
}

const titleSchema = Yup.string()
  .required()
  .required('Title is required')
  .matches(/^[A-Za-z0-9]+$/, 'Title must be alphanumeric')

const formSchema = Yup.object({
  title: titleSchema,
})

export const projecSchema = Yup.object().shape({
  title: titleSchema,
})

export const validateTitle = (title: string) => {
  try {
    titleSchema.validateSync(title)
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return err.errors as string[]
    }
  }
  return null
}

export const projectFormValidator = (values: IFormValues) => {
  try {
    formSchema.validateSync(values, { abortEarly: false })
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return err.errors as string[]
    }
  }
  return null
}
