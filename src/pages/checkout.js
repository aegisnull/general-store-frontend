import { useContext, useState } from "react";
import { Text, Button, Paper, Modal, Group, TextInput } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { CartContext } from "@/contexts/CartContext";

export default function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const handleRemoveItem = (itemName) => {
    setItemName(itemName);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    const newCartItems = cartItems.filter((item) => item.name !== itemName);
    setCartItems(newCartItems);
    setIsModalOpen(false);
  };

  const handleCancelRemove = () => {
    setIsModalOpen(false);
  };

  const handleCheckout = () => {
    // Validate the name and address fields
    if (!name || !address) {
      return;
    }

    // Save the order in the database
    const order = {
      name,
      address,
      items: cartItems,
    };

    // Reset the shopping cart
    setCartItems([]);

    // Redirect the user to the store's main page
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <Text align="center" size="sm" color="dimmed">
          Your cart is empty
        </Text>
      ) : (
        cartItems.map((item) => (
          <Paper key={item.name} style={{ marginBottom: "0.5rem" }}>
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
                <Text>{item.name}</Text>
                <Text size="sm" color="dimmed">
                  ${item.price.toFixed(2)}
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button
                  variant="outline"
                  color="red"
                  size="xs"
                  onClick={() => handleRemoveItem(item.name)}
                >
                  <IconTrash size={18} />
                </Button>
              </div>
            </div>
          </Paper>
        ))
      )}

      <div style={{ marginTop: "1rem" }}>
        <h2>Total</h2>
        <h3>
          ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </h3>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h2>Name</h2>
        <TextInput
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h2>Address</h2>
        <TextInput
          value={address}
          onChange={(event) => setAddress(event.currentTarget.value)}
          placeholder="Enter your address"
          required
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Button
          fullWidth
          variant="outline"
          color="blue"
          onClick={handleCheckout}
        >
          Pay
        </Button>
      </div>

      <Modal
        opened={isModalOpen}
        onClose={handleCancelRemove}
        title="Confirm Delete"
        size="sm"
      >
        <Text>Are you sure you want to remove this item from your cart?</Text>
        <Group align="right" mt="lg">
          <Button
            variant="outline"
            color="gray"
            onClick={handleCancelRemove}
            style={{ marginRight: "0.5rem" }}
          >
            Cancel
          </Button>
          <Button variant="filled" color="red" onClick={handleConfirmRemove}>
            Delete
          </Button>
        </Group>
      </Modal>
    </div>
  );
}
