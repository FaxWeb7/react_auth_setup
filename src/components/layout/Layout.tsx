import { FC, ReactNode } from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

interface ILayoutProps {
  children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
