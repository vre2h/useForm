import { useState, useMemo } from "react"

export default function useForm(initialValues = []) {
  const initialState = useMemo(
    () =>
      initialValues.reduce((acc, { name, value }) => {
        return {
          ...acc,
          [name]: value
        }
      }, {}),
    [JSON.stringify(initialValues)]
  )
  const [formData, setFormData] = useState(initialState)

  const setData = ({ name, value } = {}) => {
    setFormData(d => ({ ...d, [name]: value }))
  }

  const reset = () => {
    setFormData(initialState)
  }

  return [formData, setData, { reset }]
}
