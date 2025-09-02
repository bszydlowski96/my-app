import { useState } from "react"

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [on, setOn] = useState<boolean>(false)
  return (
    <div>
      {/* --- Licznik --- */}
      <h1>Licznik: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {/* --- Toggle --- */}
      <section>
        <h2>Toggle</h2>
        <button onClick={() => setOn(!on)}>
          {on ? "Włączone ✅" : "Wyłączone ❌"}
        </button>
      </section>
    </div>
  )
}
