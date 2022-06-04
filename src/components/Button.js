import React from 'react'

const Button = ({ type = 'button', children, ...props }) => {
  return (
    <React.Fragment>
      <button className='button' type={type} {...props}>
        {children}
      </button>
    </React.Fragment>
  )
}

export default Button
