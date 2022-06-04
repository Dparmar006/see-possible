import React from 'react'

const Input = ({ value = '', onChange = () => {}, ...props }) => {
  return (
    <React.Fragment>
      <input value={value} className='input' onChange={onChange} {...props} />
    </React.Fragment>
  )
}

export default Input
