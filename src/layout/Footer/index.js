import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

const index = () => {
  return (
    <React.Fragment>
      <footer className='footer'>
        <div className='footer__policy'>Cookie Policy - Legal Notice</div>
        <div className='footer__copyright'>
          {' '}
          Copyright © {new Date().getFullYear()}. Made with ♥ from seepossible
        </div>
        <div className='footer__sm'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaPinterest />
        </div>
      </footer>
    </React.Fragment>
  )
}

export default index
