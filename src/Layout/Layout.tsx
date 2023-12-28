import { ReactNode } from "react"
import Header from "../Sections/Header"
import { Navbar } from "../Sections/navbar"

type LayoutProps = {
  children: ReactNode
}


function Layout ({ children }: LayoutProps){
  return (
    <>
    <Header />
    <div className="flex ">
      <Navbar />
    <div>{children}</div>
    </div>
    </>
  )
}
export default Layout