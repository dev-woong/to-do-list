import React, { useState, useRef } from "react"
import Todo from "./Todo"

const List = ({ initialList }) => {
  const [list, setList] = useState(initialList)

  const [input, setInput] = useState("")

  //Change
  const onChange = (e) => {
    const text = e.target.value
    setInput({ ...input, text })
  }

  //Create
  const nextId = useRef(3)
  const onCreate = () => {
    const todo = {
      id: nextId.current,
      content: input.text,
      active: false,
    }
    setList(list.concat(todo))
    setInput({ text: "" })
    nextId.current += 1
  }

  //Toggle
  const onToggle = (id) => {
    setList(list.map((todo) => (todo.id === id ? { ...todo, active: !todo.active } : todo)))
  }

  return (
    <div>
      <input id="input" type="text" onChange={onChange} value={input.text || ""} />
      <button onClick={onCreate}>등록</button>
      {list.map((todo) => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default List
