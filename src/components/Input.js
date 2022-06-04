import React from 'react'
import { FaSistrix } from 'react-icons/fa'
const Input = ({
  value = '',
  label = '',
  name = '',
  wrapperClass,
  type = 'text',
  onChange = () => {},
  ...props
}) => {
  return (
    <React.Fragment>
      <div className={`input-wrapper ${wrapperClass}`}>
        <label htmlFor={name}>{label ? label : null}</label>
        <input
          style={type === 'search' ? { paddingLeft: '2rem' } : {}}
          value={value}
          name={name}
          type={type}
          id={name.replace(' ', '-')}
          className='input'
          onChange={onChange}
          {...props}
        />
        {type === 'search' && <FaSistrix className='search-icon' />}
      </div>
    </React.Fragment>
  )
}

export default Input
