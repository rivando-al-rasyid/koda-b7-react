import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addProduct,
    removeProduct,
    editProduct,
} from "../features/product/slice";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/Table";
import Footer from "../layout/Footer";

export default function Product() {
    const products = useSelector((state) => state.product.items);
    const dispatch = useDispatch();
    const [editingProduct, setEditingProduct] = useState(null); // null = mode add

    const handleAddProduct = (product) => {
        if (editingProduct) {
            // Mode edit
            dispatch(
                editProduct({
                    id: editingProduct.id,
                    productName: product.productName,
                }),
            );
            setEditingProduct(null);
        } else {
            // Mode add
            dispatch(addProduct(product));
        }
    };

    const handleEditProduct = (id) => {
        const found = products.find((p) => p.id === id);
        if (found) setEditingProduct(found);
    };

    const handleDeleteProduct = (id) => {
        dispatch(removeProduct(id));
    };

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        📦 Product Manager
                    </h2>
                </div>
                <ProductForm
                    onAddProduct={handleAddProduct}
                    editingProduct={editingProduct}
                    onCancelEdit={() => setEditingProduct(null)}
                    Name="Product"
                />
                <ProductTable
                    products={products}
                    onDelete={handleDeleteProduct}
                    onEdit={handleEditProduct}
                />
            </section>
            <Footer />
        </main>
    );
}
