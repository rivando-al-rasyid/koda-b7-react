import { useState } from 'react'
import Button from './components/Button'
import ProductForm from './components/Form'
import ProductTable from './components/Table'
function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])

  const increment = () => {
    if (count < 10) setCount(count + 1)
  }
  const decrement = () => {
    if (count > 0) setCount(count - 1)
  }
const handleAddProduct = (product) => {
  setProducts([...products, product])
}

  return (
    <>
    <main className="grid min-h-screen place-items-center bg-gray-100">
        <section className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-lg">
        <h1 className='text-2xl font-bold'>Counter App</h1>
        <div className='flex flex-row items-center gap-4'>
        <Button color="bg-red-500 hover:bg-red-600 text-white" name="Kurang" onClick={decrement} />
        <p className="mt-4 text-lg font-medium">You clicked {count} times</p>
        <Button color="bg-green-500 hover:bg-green-600 text-white" name="Tambah" onClick={increment} />
        </div>
    </section>
    <section className="mt-12 w-full max-w-md">
      <ProductForm onAddProduct={handleAddProduct} />
    </section>
    <section className="mt-12 w-full max-w-md">
      <ProductTable products={products} />
    </section>

    </main>
    </>
  )
}

export default App
