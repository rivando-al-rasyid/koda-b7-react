export default function ProductTable({ products, onDelete, onEdit }) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
    };

    const getTitle = (product) =>
        product.productName ?? product.title ?? "Untitled Product";

    return (
        <section>
            <h2>📦 Product List</h2>

            {products.length === 0 ? (
                <div>
                    <p>🗂️ No products yet</p>
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, index) => (
                            <tr key={p.id}>
                                <td>{String(index + 1).padStart(2, "0")}</td>
                                <td>{getTitle(p)}</td>
                                <td>{formatDate(p.id)}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => onEdit(p.id)}
                                    >
                                        edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onDelete(p.id)}
                                    >
                                        hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}
