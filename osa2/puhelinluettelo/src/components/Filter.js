import React from 'react'

const Filter = ({ filter, change }) => {
  return (
    <div>
      rajaa näytettäviä
      <input
        value={filter}
        onChange={change}
      />
    </div>
  )
}

export default Filter
