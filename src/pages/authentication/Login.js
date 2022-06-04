import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../App'
import Button from '../../components/Button'
import Input from '../../components/Input'
import api from '../../util/api'

const Login = () => {
  const [fields, setFields] = useState({})
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  const fieldChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (fields.email === 'dixit@gmail.com' && fields.password === '12345678') {
      toast.success('You logged in successfully.')
      localStorage.setItem(
        'user',
        JSON.stringify({
          email: 'dixit@gmail.com',
          password: '12345678'
        })
      )
      authContext.setUser({
        email: 'dixit@gmail.com',
        password: '12345678'
      })
      navigate('/')
    } else {
      toast.error('Email or Password is wrong.')
    }
  }

  return (
    <React.Fragment>
      <div className='column-flex'>
        <h2>Login to continue</h2>
        <form
          method='POST'
          onSubmit={e => handleSubmit(e)}
          className='addressform'
        >
          <Input
            wrapperClass='d_w-95'
            onChange={fieldChange}
            value={fields.email}
            name='email'
            label='Email'
            required
          />
          <Input
            wrapperClass='d_w-95'
            onChange={fieldChange}
            value={fields.password}
            name='password'
            label='Password'
            type='password'
            required
          />

          <Button type='submit' className='d_w-95'>
            Login
          </Button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Login
