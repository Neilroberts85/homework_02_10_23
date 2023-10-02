import { useState } from 'react'
import './App.css'

function App() {
  
  const [items, setItems] = useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "high"}, 
    {name: "Car's MOT", priority: "low"}
  ])

  const [newItem, setNewItem] = useState("")
  const [newPriority, setNewPriority] = useState("")
  

  const itemList = items.map((item, index) => {
    return <li key={index} className={item.priority ? "high":"low"}>
      <span className='item-name'>{item.name}</span>
      {item.priority === "high" ? (
        <span className='high'>High Priority!</span>
      ) : (
        <span className='low'>Low Priority!</span>)}
      </li>
  })
  
  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  }

  const handleRadioInput = (event) => {
    setNewPriority(event.target.value)
  }

  const saveNewItem = (event) => {
    event.preventDefault()
    const copyItems = [... items]
    
    copyItems.push({name: newItem, priority: newPriority})
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
    <form onSubmit={saveNewItem}>
      <label htmlFor='new-todo'>Add a To do</label>
      <input id="new-todo" type='text' value={newItem} onChange={handleItemInput}/>
      <input id="radio-high" name="priority" type='radio'value="high" onChange={handleRadioInput}/>
      <label htmlFor="high-priority">High Priority</label>
      <input id="radio-low" name="priority" type='radio' value="low" onChange={handleRadioInput}/>
      <label htmlFor="low-priority">Low Priority</label>
      <input type='submit' value="Save new Todo"/> 


    </form>

    </>
  )
}

export default App
