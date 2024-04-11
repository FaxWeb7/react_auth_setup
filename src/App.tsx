import { FC, useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from './main'
import { Layout } from './components/layout/Layout'
import { Home } from './components/pages/Home/Home'
import { Login } from './components/pages/Login/Login'

export const App: FC = observer(() => {
  const { store } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.updateAuth()
    }
  }, [])

  if (store.isLoading) {
    return <h1>Loding...</h1>
  }

  if (!store.isAuth) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Routes>
    )
  }

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Layout>
  )
})
