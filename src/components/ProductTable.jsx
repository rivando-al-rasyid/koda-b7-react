export default function ProductTable({ products, onEdit, onDelete }) {
    const getTitle = (p) => p.productName ?? p.title ?? "Untitled";

    if (!products.length) return <p>🗂️ No products yet</p>;

    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p, index) => (
                    <tr key={p.id}>
                        <td>{String(index + 1).padStart(2, "0")}</td>
                        <td>{getTitle(p)}</td>
                        <td>
                            <button type="button" onClick={() => onEdit(p.id)}>edit</button>
                            <button type="button" onClick={() => onDelete(p.id)}>hapus</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
