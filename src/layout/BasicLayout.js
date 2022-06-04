import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
const BasicLayout = ({ children, title }) => {
  useEffect(() => {
    document.title = title ? title + ' | SEE POSSIBLE' : 'SEE POSSIBLE'
  }, [window.location.pathname])
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default BasicLayout
