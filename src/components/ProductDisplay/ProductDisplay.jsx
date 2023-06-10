import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductDisplay.module.scss";
import { Grid, Container, Group } from "@mantine/core";
import ProductCard from "../ProductCard/ProductCard";
import ShoppingCartSidebar from "../ShoppingCart/ShoppingCart";
import { CartContext } from "@/contexts/CartContext";

export default function ProductDisplay({ isCartOpen, toggleCart }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://general-store-backend-production-62ab.up.railway.app/products"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((currentCartItems) => [...currentCartItems, product]);
    toggleCart();
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div id="products">
      <Group position="center">
        <h2>Our Products</h2>
      </Group>
      <Container size="s">
        <Grid className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
              isNew={product.isNew}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </Grid>
      </Container>
      <ShoppingCartSidebar isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
}
