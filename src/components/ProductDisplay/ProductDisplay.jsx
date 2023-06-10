import React, { useEffect, useContext, useState } from "react";
import styles from "./ProductDisplay.module.scss";
import { Grid, Container, Group } from "@mantine/core";
import ProductCard from "../ProductCard/ProductCard";
import ShoppingCartSidebar from "../ShoppingCart/ShoppingCart";
import { getProducts } from "@/api/products";
import { CartContext } from "@/contexts/CartContext";

export default function ProductDisplay({ isCartOpen, toggleCart }) {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toggleCart();
  };

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
