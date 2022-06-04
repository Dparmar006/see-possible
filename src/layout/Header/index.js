import React from 'react'
import { useNavigate } from 'react-router-dom'
import getLocalItem from '../../util/localStorage'

const Index = () => {
  const nevigate = useNavigate()
  return (
    <React.Fragment>
      <header className='header'>
        <div className='header__logo'>
          <div />
        </div>
        <div className='header__network-warning'></div>
        <div className='header__user-details'>
          {getLocalItem('user')?.email ? (
            <>
              Welcome Jack Sparrow
              <h4
                onClick={() => {
                  localStorage.removeItem('user')
                  nevigate('/signin')
                }}
              >
                Logout
              </h4>
            </>
          ) : (
            <>
              {window.location.pathname === '/signin' ? (
                <h4>Sign Up</h4>
              ) : (
                <h4>Sign In</h4>
              )}
            </>
          )}
        </div>
      </header>
    </React.Fragment>
  )
}

export default Index
