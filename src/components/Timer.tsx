import { useEffect, useState } from "react"

export function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(id) // sprzątanie
  }, [])

  return <p>Minęło: {seconds} s</p>
}
