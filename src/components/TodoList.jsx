import TodoCard from "./TodoCard"

export default function TodoList() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vegetables',
    'Pick up the kids from school'
  ]

  return (
    <ul className="main">
      {
        todos.map((todo, todoIndex) => {
          return (
            <TodoCard key={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          )
        })
      }
    </ul>
  )
}