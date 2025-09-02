import "@testing-library/jest-dom/vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import GreetingCounter from "./GreetingCounter"

describe("GreetingCounter", () => {
  it("pokazuje imię z propsa", () => {
    render(<GreetingCounter name="Ala" />)
    expect(screen.getByText(/Cześć, Ala!/i)).toBeInTheDocument()
  })

  it("inkrementuje licznik po kliknięciu +1", () => {
    render(<GreetingCounter name="Ala" start={5} />)
    fireEvent.click(screen.getByText("+1"))
    expect(screen.getByText(/Licznik:\s*6/i)).toBeInTheDocument()
  })

  it("toggle pokazuje/ukrywa szczegóły", () => {
    render(<GreetingCounter name="Ala" />)
    const btn = screen.getByText(/Pokaż szczegóły/i)
    fireEvent.click(btn)
    expect(screen.getByText(/Start licznika:/i)).toBeInTheDocument()
    fireEvent.click(screen.getByText(/Ukryj szczegóły/i))
    expect(screen.queryByText(/Start licznika:/i)).not.toBeInTheDocument()
  })
})
