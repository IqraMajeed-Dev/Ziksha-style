
// import React from "react";

// const Products = ({ products }) => {
//   return (
//     <div className="products-list">
//       {products && products.length > 0 ? (
//         products.map((product) => (
//           <div key={product.id} className="product-item">
//             <img
//               src={product.image || './src/components/swiss.jpg'}
//               alt={product.name}
//               className="product-image"
//             />
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Products;
// import React from "react";

// const Products = () => {
//   const products = [
//     { id: 1, image: "/images/swiss.jpg", name: "Design:MC11", price: 25 },
//     { id: 2, image: "/images/palassh.jpg", name: "Design:LM11", price: 44 },
//     { id: 3, image: "/images/shirt.jpg", name: "Design:FC11", price: 45 },
//     { id: 4, image: "/images/palash.jpg", name: "Design:NP11", price: 50 },
//     { id: 5, image: "/images/mughal.jpg", name: "Design:BE11", price: 55 },
//     { id: 6, image: "/images/image.jpg", name: "Design:FC11", price: 55 },
//   ];

//   return (
//     <div className="products-list" style={styles.productsList}>
//       {products.map((product) => (
//         <div key={product.id} className="product-item" style={styles.productItem}>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="product-image"
//             style={styles.productImage}
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "/images/fallback.jpg"; // Optional fallback image
//             }}
//           />
//           <h3 style={styles.productTitle}>{product.name}</h3>
//           <p style={styles.productPrice}>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   productsList: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//     gap: "20px",
//     padding: "20px",
//   },
//   productItem: {
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "10px",
//     textAlign: "center",
//     backgroundColor: "#f9f9f9",
//   },
//   productImage: {
//     width: "100%",
//     height: "250px",
//     objectFit: "cover",
//     borderRadius: "6px",
//   },
//   productTitle: {
//     marginTop: "10px",
//     fontSize: "16px",
//     fontWeight: "bold",
//   },
//   productPrice: {
//     color: "#333",
//     marginTop: "5px",
//   },
// };

// export default Products;
import React, { useState } from "react";

const Products = ({ products, addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      alert("Please fill all fields");
      return;
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      alert("Enter valid price");
      return;
    }

    // Ensure image path starts with "/"
    const imgPath = image.startsWith("/") ? image : "/" + image;

    addProduct({ name, price: priceNum, image: imgPath });

    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.length === 0 && <p>No products available.</p>}
        {products.map(({ id, image, name, price }) => (
          <div
            key={id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              maxWidth: "220px",
              textAlign: "center",
            }}
          >
            <img
              src={image}
              alt={name}
              style={{ width: "200px", height: "auto", marginBottom: "10px" }}
            />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
          </div>
        ))}
      </div>

      <hr style={{ margin: "40px 0" }} />

      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "320px" }}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Image path (e.g. /images/shirt.jpg)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Products;
