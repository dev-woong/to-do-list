import React from "react"

const Todo = ({ todo, onToggle }) => {
  const { id, content, active } = todo
  return (
    <>
      <h1
        onClick={() => {
          onToggle(id)
        }}
        style={{ cursor: "pointer", color: active ? "blue" : "black" }}
      >
        {content}
      </h1>
    </>
  )
}

export default Todo
