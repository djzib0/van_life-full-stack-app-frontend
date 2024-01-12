import React, { useEffect, useState } from 'react'

export default function useConcatClassNames(classes) {

  let concatenatedClassNames = ""

  const [fullClassName, setFullClassName] = useState("")
  
  useEffect(() => {
    //create a string with all passed class names, 
    // separated by whitespace
    for (let key in classes) {
      setFullClassName(prevState => prevState + " " + classes[key])
    }
  }, [])




  return (
    [fullClassName]
  )
}
