import { Text, Button, Modal, Paper } from "@mantine/core";
import { IconTrash, IconMinus, IconPlus } from "@tabler/icons-react";

export default function Checkout({ cartItems }) {
  return (
    <div>
      <h1>Checkout</h1>
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
    </div>
  );
}
