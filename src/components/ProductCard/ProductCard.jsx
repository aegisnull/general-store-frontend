import { Card, Image, Badge, Text, Button } from "@mantine/core";

export default function ProductCard({
  name,
  image,
  price,
  isNew,
  onAddToCart,
}) {
  return (
    <Card shadow="xs" padding="lg">
      <div style={{ position: "relative" }}>
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
          height={180}
          fit="cover"
          radius="md"
          shadow="sm"
        />
      </div>
      <Text size="xl" weight={600} style={{ marginTop: "1rem" }}>
        {name}
      </Text>
      <Text size="sm" style={{ marginTop: "0.5rem" }}>
        ${price}
      </Text>
      <Button
        fullWidth
        variant="outline"
        color="blue"
        style={{ marginTop: "1rem" }}
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
}
