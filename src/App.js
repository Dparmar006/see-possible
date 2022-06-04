import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicLayout from './layout/BasicLayout'
import allRoutes from './routes'
function App () {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {allRoutes.map(route => {
            return (
              <Route
                path={route.path}
                element={<BasicLayout>{route.component}</BasicLayout>}
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
