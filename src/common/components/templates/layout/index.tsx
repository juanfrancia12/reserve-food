import { isUser } from "@data/user"
import Footer from "./components/Footer"
import Header from "./components/Header"

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout = (props: LayoutProps) => {
  const pathname_includes = [{ name: "/login" }]

  const hidden_Header_Footer = pathname_includes.some((path) =>
    window.location.pathname.includes(path.name)
  )

  return (
    <div className="min-h-screen flex flex-col">
      {isUser && !hidden_Header_Footer && <Header />}
      <main className="grow bg-gray-800">{props.children}</main>
      {isUser && !hidden_Header_Footer && <Footer />}
    </div>
  )
}

export default Layout
