import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Store from './store/store.ts'
import { App } from './App.tsx'
import './styles/global.scss'

const store = new Store()
export const Context = createContext<{ store: Store }>({ store })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
)
