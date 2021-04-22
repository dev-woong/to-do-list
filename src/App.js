import React, { useState } from "react"
import List from "./List"

const initialList = [
  {
    id: 1,
    content: "first to do list",
    active: true,
  },
  {
    id: 2,
    content: "second to do list",
    active: false,
  },
]

const App = () => {
  return (
    <>
      <List initialList={initialList} />
    </>
  )
}

export default App
