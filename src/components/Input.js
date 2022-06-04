import React from 'react'

const Input = ({
  value = '',
  label = '',
  name = '',
  wrapperClass,
  onChange = () => {},
  ...props
}) => {
  return (
    <React.Fragment>
      <div className={`input-wrapper ${wrapperClass}`}>
        <label htmlFor={name}>{label ? label : null}</label>
        <input
          value={value}
          name={name}
          id={name.replace(' ', '-')}
          className='input'
          onChange={onChange}
          {...props}
        />
      </div>
    </React.Fragment>
  )
}

export default Input
