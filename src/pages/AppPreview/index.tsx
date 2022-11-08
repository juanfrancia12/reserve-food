import { useEffect, useState } from "react"

import UNAC_logo from "@assets/UNAC-logo.webp"

const AppPreviewPage = () => {
  const [redirectHomePage, setRedirectHomePage] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log("This will run after 2 second!")
      window.location.replace("/home")
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full h-screen bg-primary-300">
      <div className="h-full flex flex-col items-center justify-center gap-12">
        <div className="w-40">
          <img src={UNAC_logo} alt="UNAC logo" className="w-full h-full" />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-100 text-center">
          OFICINA DE BIENESTAR UNIVERSITARIO
        </h1>
      </div>
    </section>
  )
}

export default AppPreviewPage
