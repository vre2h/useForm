import { useState, useMemo } from "react"

export default function useForm(initialValues = []) {
  const initialState = useMemo(
    () =>
      initialValues.reduce((acc, { name, ...props }) => {
        return {
          ...acc,
          [name]: props
        }
      }, {}),
    [JSON.stringify(initialValues)]
  )
  const [formData, setFormData] = useState(initialState)

  const setData = (name, stateUpdater) => {
    let newState = {}

    if (typeof stateUpdater === "function") {
      newState = {
        [name]: { ...formData[name], ...stateUpdater(formData[name]) }
      }
    } else if (typeof stateUpdater === "object") {
      newState = { [name]: { ...formData[name], ...stateUpdater } }
    }
    setFormData(d => ({ ...d, ...newState }))
  }

  const reset = () => {
    setFormData(initialState)
  }

  return [formData, setData, { reset }]
}
