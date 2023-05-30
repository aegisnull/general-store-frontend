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
