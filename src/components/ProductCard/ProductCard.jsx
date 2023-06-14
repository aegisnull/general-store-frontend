import React from "react";
import { Card, Image, Text, Button, Badge } from "@mantine/core";
import Link from "next/link";

export default function ProductCard({
  productId,
  name,
  image,
  price,
  isNew,
  onAddToCart,
}) {
  function handleAddToCart(event) {
    event.preventDefault();
    const item = {
      name,
      image,
      price,
    };
    onAddToCart(item);
  }

  return (
    <Link href={`/shop/${productId}`}>
      <Card
        shadow="sm"
        padding="lg"
        radius="lg"
        style={{ height: "100%", maxWidth: 300 }}
      >
        <div style={{ position: "relative", marginBottom: "1rem" }}>
          {isNew && (
            <Badge
              position="top-right"
              variant="filled"
              color="blue"
              style={{ marginRight: "0.5rem", marginTop: "0.5rem" }}
            >
              New
            </Badge>
          )}
          <Image
            src={image}
            alt={name}
            height={200}
            fit="contain"
            radius="md"
            shadow="sm"
          />
        </div>
        <Text size="xl" weight={600} style={{ marginTop: "1rem" }}>
          {name}
        </Text>
        <Text size="sm" style={{ marginTop: "0.5rem" }}>
          ${price.toFixed(2)}
        </Text>
        <Button
          fullWidth
          variant="outline"
          color="blue"
          style={{ marginTop: "1rem" }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Card>
    </Link>
  );
}
