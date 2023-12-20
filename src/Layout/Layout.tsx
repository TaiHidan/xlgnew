import { ReactNode } from "react"
import Header from "../Sections/Header"

type LayoutProps = {
  children: ReactNode
}


function Layout ({ children }: LayoutProps){
  return (
    <>
    <Header/>
    <div>{children}</div>

    </>
  )
}
export default Layout