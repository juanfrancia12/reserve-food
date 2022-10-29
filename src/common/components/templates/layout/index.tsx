import React from "react"
import Header from "./components/Header"

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
