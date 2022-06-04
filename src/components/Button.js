import React from 'react'

const Button = ({ type = 'button', className, children, ...props }) => {
  return (
    <React.Fragment>
      <button className={`button ${className}`} type={type} {...props}>
        {children}
      </button>
    </React.Fragment>
  )
}

export default Button
