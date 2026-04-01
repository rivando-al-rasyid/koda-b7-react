import { useState } from 'react'
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    if (count < 10) setCount(count + 1)
  }
  const decrement = () => {
    if (count > 0) setCount(count - 1)
  }

  return (
    <>
      <Button name="Tambah" onClick={increment} />
      <p className="mt-4 text-lg font-medium">You clicked {count} times</p>
      <Button name="Kurang" onClick={decrement} />
    </>
  )
}

export default App
