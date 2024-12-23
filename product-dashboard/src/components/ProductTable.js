import React from 'react'

function ProductTable({products}){
    if (!products || products.length === 0) {
        return <p>No products found.</p>;
      }
    return(
        <table border="1" style={{width:'100%', textAlign:'left'}}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Sold</th>
                    <th>Is Sale</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} alt={product.title} width='50'/></td>
                        <td>{product.sold? 'Yes' : 'No'}</td>
                        <td style={{color:product.is_sale ? 'green' : 'red'}}>
                            {product.is_sale? 'On Sale' : 'Not On Sale'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;