import { useState } from "react";
import {
  Drawer,
  Group,
  Title,
  Text,
  Divider,
  Button,
  Paper,
} from "@mantine/core";
import { IconShoppingCart, IconTrash } from "@tabler/icons-react";

export default function ShoppingCartSidebar({ isOpen, toggleCart, cartItems }) {
  /* const cartItems = [
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
  ]; */

  return (
    <Drawer
      opened={isOpen}
      onClose={toggleCart}
      size="md"
      padding="xl"
      position="right"
    >
      <Group direction="column" spacing="lg">
        <Title order={4} style={{ marginBottom: 0 }}>
          Shopping Cart
        </Title>
        <Divider />
        {cartItems === undefined ? (
          <Text align="center" size="sm" color="dimmed">
            Your cart is empty
          </Text>
        ) : (
          cartItems.map((item) => (
            <Paper key={item.name} padding="md">
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconShoppingCart size={20} style={{ marginRight: "0.5rem" }} />
                <div>
                  <Text>{item.name}</Text>
                  <Text size="sm" color="dimmed">
                    ${item.price.toFixed(2)}
                  </Text>
                </div>
                <Button
                  variant="outline"
                  color="red"
                  size="xs"
                  style={{ marginLeft: "auto" }}
                  onClick={() => handleRemoveItem(item.name)}
                >
                  <IconTrash size={18} />
                </Button>
              </div>
            </Paper>
          ))
        )}
        <Divider />

        <Button fullWidth variant="outline" color="blue">
          Checkout
        </Button>
      </Group>
    </Drawer>
  );
}
