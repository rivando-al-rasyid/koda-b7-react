import { useState, useEffect } from "react";
import ProductForm from "../components/Form";
import ProductTable from "../components/Table";
import Footer from "../layout/Footer";

export default function Product() {
    // 1. Initialize state with a "Lazy Initializer" (Cleans up the double-useEffect flicker)
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("productData");
        return savedProducts ? JSON.parse(savedProducts) : [];
    });

    // 2. This effect runs every time 'products' changes
    useEffect(() => {
        localStorage.setItem("productData", JSON.stringify(products));
    }, [products]);

    const handleAddProduct = (product) => {
        if (product.productName === "") return;

        // Using the functional update ensures you have the latest state
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        📦 Product Manager
                    </h2>
                </div>
                <ProductForm onAddProduct={handleAddProduct} />
                <ProductTable products={products} />
            </section>
            <Footer />
        </main>
    );
}
