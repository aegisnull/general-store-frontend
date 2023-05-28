import styles from "./ProductDisplay.module.scss";
import { Grid, Container } from "@mantine/core";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductDisplay() {
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
      name: "Robusta Coffee",
      image:
        "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-4.png?v=1675661896&width=720",
      price: 14.99,
      isNew: false,
    },
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
      name: "Robusta Coffee",
      image:
        "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-4.png?v=1675661896&width=720",
      price: 14.99,
      isNew: false,
    },
  ];

  const handleAddToCart = (productName) => {
    // Handle adding the product to the cart
    console.log(`Added ${productName} to the cart`);
  };

  return (
    <div>
      <h2>Our Products</h2>
      <Container size="s">
        <Grid className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
              isNew={product.isNew}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
