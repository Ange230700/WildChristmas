import React, { useState, useEffect } from "react";
import productsData from "../data.js";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setProducts([...productsData]);
  }, []);
};

return (
  <div>
    <h2>Ma Wishlist</h2>
    {products.map((product) => (
      <WishlistProduct key={product.id} product={product} />
    ))}
  </div>
);

export default Wishlist;
