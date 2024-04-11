import { FC, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../../../main'

export const Login: FC = () => {
  const { store } = useContext(Context)
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  if (store.isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <input type="name" placeholder="enter your login" onChange={e => setLogin(e.target.value)} />
      <input type="password" placeholder="enter password" onChange={e => setPassword(e.target.value)} />
      <button onClick={() => store.login(login, password)}>Submit</button>
    </>
  )
}
