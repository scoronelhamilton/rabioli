import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Rabioli" }]
}

export default function Home() {
  return <div>Hello World!</div>
}
