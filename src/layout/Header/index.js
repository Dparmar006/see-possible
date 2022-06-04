import React from 'react'

const index = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <div className='header__logo'>
          <div />
        </div>
        <div className='header__network-warning'></div>
        <div className='header__user-details'>
          Welcome Jack Sparrow
          <h4>Sign In</h4>
          <h4>Sign Up</h4>
        </div>
      </header>
    </React.Fragment>
  )
}

export default index
