import React, { useContext } from "react";
import styles from "./ProductDisplay.module.scss";
import { Grid, Container, Group } from "@mantine/core";
import ProductCard from "../ProductCard/ProductCard";
import ShoppingCartSidebar from "../ShoppingCart/ShoppingCart";
import { CartContext } from "@/contexts/CartContext";

export default function ProductDisplay({ isCartOpen, toggleCart }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = (product) => {
    setCartItems((currentCartItems) => [...currentCartItems, product]);
    toggleCart();
  };

  const products = [
    {
      name: "Colombian Dark Roast",
      image:
        "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-8.png?v=1675662787&width=720",
      price: 12.99,
      isNew: false,
    },
    {
      name: "Ethiopian Yirgacheffe",
      image:
        "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-7.png?v=1675662588&width=720",
      price: 14.99,
      isNew: false,
    },
    {
      name: "Arabica Coffee",
      image:
        "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-4.png?v=1675661896&width=720",
      price: 14.99,
      isNew: false,
    },
    {
      name: "Black Tea",
      image:
        "https://cdn.shopify.com/s/files/1/0566/9965/0230/files/img-4_720x_680bc1c2-2c6d-4b9d-81dd-55808867b5ed.png?v=1640174980",
      price: 12.99,
      isNew: false,
    },
    {
      name: "Craft Beans",
      image:
        "https://dt-cafeley.myshopify.com/cdn/shop/files/specification.png?v=1665815885&width=275",
      price: 14.99,
      isNew: false,
    },
    {
      name: "Robusta Coffee",
      image:
        "https://cdn.shopify.com/s/files/1/1815/2235/products/5lb_1000x.png?v=1584727129",
      price: 14.99,
      isNew: false,
    },
  ];

  return (
    <div>
      <Group position="center">
        <h2>Our Products</h2>
      </Group>
      <Container size="s">
        <Grid className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.name}
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
