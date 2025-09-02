import { useState } from "react"
import styles from "./GreetingCounter.module.scss"

type GreetingCounterProps = {
  name: string
  start?: number
}

export default function GreetingCounter({ name, start }: GreetingCounterProps) {
  const [count, setCount] = useState<number>(start ?? 0)
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [nickname, setNickname] = useState<string>("")

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        Cześć, {name}! {nickname && <> (aka {nickname})</>}
      </h3>

      <p className={styles.value}>Licznik: {count}</p>

      <div className={styles.row}>
        <button className={styles.btn} onClick={() => setCount((c) => c + 1)}>
          +1
        </button>

        <button
          className={styles.btnGhost}
          onClick={() => setCount((c) => c - 1)}
          disabled={count <= 0}
        >
          -1
        </button>

        <button className={styles.btnGhost} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <div className={styles.row}>
        <button
          className={styles.btnGhost}
          onClick={() => setShowDetails((p) => !p)}
        >
          {showDetails ? "Ukryj szczegóły" : "Pokaż szczegóły"}
        </button>
      </div>

      {showDetails && (
        <>
          <div className={styles.row}>
            <input
              className={styles.input}
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Wpisz nick"
            />
          </div>
          <div className={styles.muted}>Start licznika: {start ?? 0}</div>
        </>
      )}
    </div>
  )
}
