import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../App'
import getLocalItem from '../../util/localStorage'

const Index = () => {
  const nevigate = useNavigate()
  const authContext = useContext(AuthContext)
  return (
    <React.Fragment>
      <header className='header'>
        <div onClick={() => nevigate('/')} className='header__logo'>
          <div />
        </div>
        <div className='header__network-warning'></div>
        <div className='header__user-details'>
          {authContext?.user?.email ? (
            <>
              Welcome {authContext?.user?.email}
              <h4
                onClick={() => {
                  authContext?.setUser({ email: '', password: '' })
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
