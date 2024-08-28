import React from 'react'

export default function Subject(props) {
  console.log(props.sub)

  return (
    <div>
      <h3>learn about the { props.sub}</h3>
    </div>
  )
}
