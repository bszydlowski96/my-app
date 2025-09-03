import { useState } from "react"
import { Logger } from "./components/Logger"
import { Timer } from "./components/Timer"
import { UserList } from "./components/UserList"

type View = "logger" | "timer" | "users"

export default function App() {
  const [view, setView] = useState<View>("logger")

  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={() => setView("logger")}>Logger</button>
        <button onClick={() => setView("timer")}>Timer</button>
        <button onClick={() => setView("users")}>UserList</button>
      </nav>

      {view === "logger" && <Logger />}
      {view === "timer" && <Timer />}
      {view === "users" && <UserList />}
    </div>
  )
}
