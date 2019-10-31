import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import Form from "./Form"

const fields = [
  { name: "login", value: "", label: "Login" },
  { name: "password", value: "", label: "Password" },
  { name: "secPassword", value: "", label: "Password 2" }
]

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
      <Form fields={fields} />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
