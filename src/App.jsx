import { useState } from 'react'
import Button from './components/Button'
import ProductForm from './components/Form'
import ProductTable from './components/Table'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])

  const increment = () => { if (count < 10) setCount(count + 1) }
  const decrement = () => { if (count > 0) setCount(count - 1) }

const handleAddProduct = (product) => {
    if (product.productName === "") return
    setProducts(products.concat(product));
}

  return (
    <main className="mx-auto max-w-md flex flex-col gap-6 min-h-screen px-4 py-12">

        <section className="bg-white border-2 border-zinc-900 rounded-2xl shadow-[4px_4px_0px_#18181b] overflow-hidden">
          <div className="px-6 py-4 border-b-2 border-zinc-900 bg-zinc-900">
            <h2 className="text-xl font-black tracking-tight text-white uppercase">
              🔢 Counter
            </h2>
          </div>
          <div className="p-6">
            {/* Count Display */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-amber-400 border-2 border-zinc-900 rounded-xl px-8 py-4 shadow-[3px_3px_0px_#18181b]">
                <span className="text-5xl font-black text-zinc-900 tabular-nums">
                  {count}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                color="flex-1 bg-white border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-100 shadow-[3px_3px_0px_#18181b]"
                name="− Kurang"
                onClick={decrement}
              />
              <Button
                color="flex-1 bg-amber-400 border-2 border-zinc-900 text-zinc-900 hover:bg-amber-300 shadow-[3px_3px_0px_#18181b]"
                name="+ Tambah"
                onClick={increment}
              />
            </div>
          </div>
        </section>

        {/* Form */}
        <ProductForm onAddProduct={handleAddProduct} />

        {/* Table */}
        <ProductTable products={products} />

    </main>
  )
}

export default App
