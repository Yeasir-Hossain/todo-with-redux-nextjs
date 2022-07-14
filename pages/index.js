import { TodoList } from "../components/TodoList";


export default function Home() {
  return (
    <h1 className="flex flex-col items-center justify-center min-h-screen bg-indigo-600">
      <TodoList />
    </h1>
  )
}