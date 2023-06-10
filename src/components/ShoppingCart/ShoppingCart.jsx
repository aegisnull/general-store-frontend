import { useContext, useState } from "react";
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
import { IconTrash, IconMinus, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { CartContext } from "@/contexts/CartContext";

export default function ShoppingCartSidebar({ isOpen, toggleCart }) {
  const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  function handleRemoveItem() {
    removeFromCart(itemName);
    setIsModalOpen(false);
  }

  function handleDecreaseCount(itemName) {
    const itemIndex = cartItems.findIndex((item) => item.name === itemName);

    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[itemIndex].quantity > 1) {
        updatedCartItems[itemIndex].quantity--;
      } else {
        updatedCartItems.splice(itemIndex, 1);
      }
      setCartItems(updatedCartItems);
    }
  }

  function handleIncreaseCount(itemName) {
    const itemIndex = cartItems.findIndex((item) => item.name === itemName);

    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity++;
      setCartItems(updatedCartItems);
    }
  }

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

  // Calculate the total items in the cart and total price
  const totalItems = cartItems
    ? Object.values(cartItemCounts).reduce((acc, count) => acc + count, 0)
    : 0;
  const totalPrice = cartItems
    ? cartItems.reduce((acc, item) => acc + item.price, 0)
    : 0;

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
              <Paper key={itemName} style={{ marginBottom: "0.5rem" }}>
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

        <Text style={{ fontWeight: "bold" }}>
          Total items in cart: {totalItems}
        </Text>
        <Text style={{ fontWeight: "bold" }}>
          Total price: ${totalPrice.toFixed(2)}
        </Text>

        <Link href="/checkout">
          <Button fullWidth variant="outline" color="blue">
            Checkout
          </Button>
        </Link>
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
