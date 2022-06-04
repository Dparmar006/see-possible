import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import BasicLayout from './layout/BasicLayout'
import Login from './pages/authentication/Login'
import PageNotFound from './pages/authentication/PageNotFound'
import allRoutes from './routes'
import getLocalItem from './util/localStorage'
export const AuthContext = createContext({ email: '', password: '' }, () => {})
function App () {
  const [user, setUser] = useState(getLocalItem('user'))

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            {allRoutes.map(route => {
              return (
                <Route
                  path={route.path}
                  element={
                    user?.email ? (
                      <BasicLayout title={route.title}>
                        {route.component}
                      </BasicLayout>
                    ) : (
                      <BasicLayout>
                        <Login />
                      </BasicLayout>
                    )
                  }
                />
              )
            })}
            <Route
              path='/signin'
              element={
                <BasicLayout>
                  <Login />
                </BasicLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default App
