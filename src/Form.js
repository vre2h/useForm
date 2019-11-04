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
              value={formData[name].value}
              onChange={e => setFormData(name, { value: e.target.value })}
              disabled={formData[name].disable}
            />
            <button
              onClick={() =>
                setFormData(name, state => ({ disable: !state.disable }))
              }
            >
              Disable
            </button>
          </label>
        </div>
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  )
}
