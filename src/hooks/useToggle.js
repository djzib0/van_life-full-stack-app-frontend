import React, { useState } from 'react'

export default function useToggle({
  id
}) {
  
  const [on, setOn] = useState(false)

  function toggleOn() {
    setOn(prevOn => !prevOn)
    console.log("box with id=" + id + " clicked")
  }

  return (
    [on, toggleOn]
  )
}

