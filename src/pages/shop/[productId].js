import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductById } from "@/api/products";
import { Container, Image, Text, Card, Button } from "@mantine/core";

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(productId);
        setProduct(product);
      } catch (error) {
        console.error(error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const item = {
      name: product.product.name,
      image: product.product.image,
      price: product.product.price,
    };
    // Add your logic to add the item to the cart here
    console.log("Add to cart:", item);
  };

  return (
    <Container size="sm" style={{ marginTop: "2rem" }}>
      {/* Render the detailed information of the product */}
      <h1 style={{ marginBottom: "1rem" }}>{product.product.name}</h1>
      <Image
        src={product.product.image}
        alt={product.product.name}
        height={320}
        width={220}
        style={{ objectFit: "cover", marginBottom: "2rem" }}
      />

      <Card shadow="sm" padding="lg">
        <Text size="lg" weight={700} style={{ marginBottom: "0.5rem" }}>
          Description
        </Text>
        <Text>{product.product.description}</Text>
        <Button
          variant="outline"
          color="blue"
          style={{ marginTop: "1rem" }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Card>
    </Container>
  );
}
