import { useState } from 'react'
import './App.css'

function App() {
  
  const [items, setItems] = useState([
    {name: "Buy shopping", priority: "High"},
    {name: "Clean bathroom", priority: "High"}, 
    {name: "Car's MOT", priority: "low"}
  ])

  const [newItem, setNewItem] = useState("")
  

  const itemList = items.map((item, index) => {
    return <li key={index} className={item.priority ? "high":"low"}>{item.name}{item.priority}</li>
  })
  
  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  }

  const saveNewItem = (event) => {
    event.preventDefault()
    const copyItems = [... items]
    
    copyItems.push({name: newItem, priority: "low"})
    setItems(copyItems)
    setNewItem("")

  }


  
console.log(itemList)
  return (
    <>
     <h1>ToDo's!</h1>

     <ul>
      {itemList}
     </ul>
    <form on onSubmit={saveNewItem}>
      <label htmlFor='new-todo'>Add a To do</label>
      <input id="new-todo" type='text' value={newItem} onChange={handleItemInput}/>
      <input id="radio" name="priority" type='radio'value={newItem} onChange={handleItemInput}/>
      <label htmlFor="high-priority">High Priority</label>
      <input id="radio" name="priority" type='radio' value={newItem} onChange={handleItemInput}/>
      <label htmlFor="low-priority">Low Priority</label>
      <input type='submit' value="Save new Todo"/> 


    </form>

    </>
  )
}

export default App
