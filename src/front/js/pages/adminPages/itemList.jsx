import React, { useEffect, useState } from "react";

export const ItemList = () => {

    const [allItems, setAllItems] = useState([]);
    useEffect(() => {
        let url = String(process.env.BACKEND_URL + "api/items");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setAllItems(data);
            })
    }, []);

    return (
        <div className="container">
            <h2 className="mt-3">Item list</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Item ID</th>
                        <th scope="col">Item name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Image URL</th>
                        <th scope="col">Visible</th>
                    </tr>
                </thead>
                <tbody>
                    {allItems.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.image_url}</td>
                            <td>{String(item.visible)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
