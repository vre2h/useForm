import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import Form from "./Form"

const fields = [
  { name: "login", value: "", disable: false, label: "Login" },
  { name: "password", value: "", disable: false, label: "Password" },
  { name: "secPassword", value: "", disable: false, label: "Password 2" }
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
