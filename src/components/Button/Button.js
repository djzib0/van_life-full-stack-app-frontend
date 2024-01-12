import React from 'react'
import useConcatClassNames from '../../hooks/useConcatClassNames'

export default function Button({children, ...rest}) {

  const [fullClassName] = useConcatClassNames(
    {
      ...rest
    }
  );
  
  return (
    <button className={`btn ${fullClassName}`}>{children}</button>
  )
}
