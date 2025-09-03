import { useEffect, useState } from "react"

type User = { id: number; name: string; email: string }

export function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        })

        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const data: User[] = await res.json()
        setUsers(data)
      } catch (e) {
        if (e instanceof Error) {
          if (e.name !== "AbortError") setError(e.message)
        } else {
          setError("Nieznany błąd")
        }
      } finally {
        setLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [])

  if (loading) return <p>Ładowanie…</p>
  if (error) return <p>Błąd: {error}</p>

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.name} ({u.email})
        </li>
      ))}
    </ul>
  )
}
