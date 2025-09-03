import { useEffect, useState } from "react"

export function Logger() {
  const [text, setText] = useState("")

  useEffect(() => {
    console.log("Text się zmienił:", text)
  }, [text])

  return (
    <div>
      <h2>Logger</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pisz coś..."
      />
    </div>
  )
}
