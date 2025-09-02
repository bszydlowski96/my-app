import GreetingCounter from "./components/GreetingCounter/GreetingCounter"

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Props + State + Mixins</h1>
      <GreetingCounter name="Ala" start={5} />
      <GreetingCounter name="Tomek" />
      <GreetingCounter name="Basia" start={10} />
      <GreetingCounter name="Karol" start={2} />
    </div>
  )
}
