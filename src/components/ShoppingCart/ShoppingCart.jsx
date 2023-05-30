import { useState } from "react";
import {
  Drawer,
  Group,
  Title,
  Text,
  Divider,
  Button,
  Modal,
  Paper,
} from "@mantine/core";
import {
  IconShoppingCart,
  IconTrash,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";

export default function ShoppingCartSidebar({
  isOpen,
  toggleCart,
  cartItems,
  setCartItems,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const handleRemoveItem = () => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
    setIsModalOpen(false);
  };

  const handleDecreaseCount = (itemName) => {
    // Decrease item count logic goes here
  };

  const handleIncreaseCount = (itemName) => {
    // Increase item count logic goes here
  };

  const cartItemCounts = {}; // Object to store item counts

  // Calculate the quantity of each item in the cart
  if (cartItems) {
    cartItems.forEach((item) => {
      if (cartItemCounts[item.name]) {
        cartItemCounts[item.name] += 1;
      } else {
        cartItemCounts[item.name] = 1;
      }
    });
  }

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
          Object.keys(cartItemCounts).map((itemName) => {
            const itemQuantity = cartItemCounts[itemName];
            const item = cartItems.find((item) => item.name === itemName);

            return (
              <Paper
                key={itemName}
                padding="md"
                shadow="sm"
                style={{ marginBottom: "0.5rem", borderRadius: "0.5rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginRight: "0.5rem",
                    }}
                  />
                  <div style={{ flex: 1, marginRight: "0.5rem" }}>
                    <Text>{itemName}</Text>
                    <Text size="sm" color="dimmed">
                      ${item.price.toFixed(2)}
                    </Text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      variant="outline"
                      color="gray"
                      size="xs"
                      onClick={() => handleDecreaseCount(itemName)}
                      disabled={itemQuantity === 1}
                      style={{ marginRight: "0.5rem" }}
                    >
                      <IconMinus size={16} />
                    </Button>
                    <Text size="sm" style={{ margin: "0 0.5rem" }}>
                      {itemQuantity}
                    </Text>
                    <Button
                      variant="outline"
                      color="gray"
                      size="xs"
                      onClick={() => handleIncreaseCount(itemName)}
                      style={{ marginRight: "0.5rem" }}
                    >
                      <IconPlus size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      color="red"
                      size="xs"
                      style={{ marginRight: "0.5rem" }}
                      onClick={() => {
                        setItemName(itemName);
                        setIsModalOpen(true);
                      }}
                    >
                      <IconTrash size={18} />
                    </Button>
                  </div>
                </div>
              </Paper>
            );
          })
        )}
        <Divider />

        <Button fullWidth variant="outline" color="blue">
          Checkout
        </Button>
      </Group>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Delete"
        size="sm"
      >
        <Text>Are you sure you want to remove this item from your cart?</Text>
        <Group align="right" mt="lg">
          <Button
            variant="outline"
            color="gray"
            onClick={() => setIsModalOpen(false)}
            style={{ marginRight: "0.5rem" }}
          >
            Cancel
          </Button>
          <Button variant="filled" color="red" onClick={handleRemoveItem}>
            Delete
          </Button>
        </Group>
      </Modal>
    </Drawer>
  );
}
