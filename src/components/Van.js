import React from 'react'


export default function Van({children}) {
  const {name, imageUrl} = children

  return (
    <div>
      {name}
      {testimage && <img src={require(`${imageUrl}`)} alt='van'/>}
    </div>
  )
}
