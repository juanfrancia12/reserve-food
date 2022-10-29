import { useEffect } from "react"

const useBodyClass = (conditional, className) => {
  useEffect(() => {
    document.body.classList[conditional ? "add" : "remove"](className)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    document.body.classList.add("halloween")
    return () => {
      document.body.classList.remove("halloween")
    }
  }, [conditional])
}

export default useBodyClass
