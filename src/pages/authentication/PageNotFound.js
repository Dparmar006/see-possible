import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const PageNotFound = () => {
  return (
    <React.Fragment>
      <div className='column-flex'>
        <h2>Page not found, Please re-login.</h2>

        <div className='addressform'>
          <Link
            to={localStorage.getItem('user')?.email ? '/' : '/signin'}
            className='d_w-95'
          >
            <Button type='submit' className='d_w-100'>
              {localStorage.getItem('user')?.email ? 'Go to home' : 'Re-login'}
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PageNotFound
