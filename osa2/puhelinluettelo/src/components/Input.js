import React from 'react'

const Input = ({ state, addPerson, change }) => {
  return (
    <div>
      <h2>Lisää uusi</h2>
      <form onSubmit={addPerson}>
        <Field text="nimi" value={state.newName} change={change("newName")} />
        <Field text="numero" value={state.newNumber} change={change("newNumber")} />
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  )
}

const Field = ({ text, value, change }) => {
  return (
    <div>
      {text}:
      <input
        value={value}
        onChange={change}
      />
    </div>
  )
}

export default Input
