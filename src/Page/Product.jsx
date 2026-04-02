import { useState } from "react";
import ProductForm from "../components/Form";
import ProductTable from "../components/Table";

export default function Product() {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (product) => {
        if (product.productName === "") return;
        setProducts(products.concat(product));
    };

    return (
        <div className="page">
            <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
                <section className="bg-white border-2 border-zinc-900 rounded-2xl shadow-[4px_4px_0px_#18181b] overflow-hidden">
                    <div className="px-6 py-4 border-b-2 border-zinc-900 bg-zinc-900">
                        <h2 className="text-xl font-black tracking-tight text-white uppercase">
                            📦 Product Manager
                        </h2>
                    </div>
                    <ProductForm onAddProduct={handleAddProduct} />
                    <ProductTable products={products} />
                </section>
            </main>
        </div>
    );
}
