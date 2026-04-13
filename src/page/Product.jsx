import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../features/product/slice";
import ProductForm from "../components/Form";
import ProductTable from "../components/Table";
import Footer from "../layout/Footer";

export default function Product() {
    const products = useSelector((state) => state.product.items);
    const dispatch = useDispatch();

    const handleAddProduct = (product) => {
        if (product.productName === "") return;
        dispatch(addProduct(product));
    };

    // The handler for removing a product
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
                <ProductForm onAddProduct={handleAddProduct} />

                <ProductTable
                    products={products}
                    onDelete={handleDeleteProduct}
                />
            </section>
            <Footer />
        </main>
    );
}
