import React from "react"
import useForm from "./hooks/useForm"

export default function Form({ fields }) {
  const [formData, setFormData, { reset }] = useForm(fields)
  return (
    <div>
      {fields.map(({ label, name }) => (
        <div key={name}>
          <label>
            {label}:
            <br />
            <input
              id={name}
              name={name}
              type="input"
              value={formData[name]}
              onChange={e =>
                setFormData({ name: e.target.name, value: e.target.value })
              }
            />
          </label>
        </div>
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  )
}
