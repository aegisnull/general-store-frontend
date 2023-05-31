import { useContext } from "react";
import { Text, Button, Paper } from "@mantine/core";
import { IconTrash, IconMinus, IconPlus } from "@tabler/icons-react";
import { CartContext } from "@/contexts/CartContext";

export default function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems === undefined ? (
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
              <div style={{ display: "flex", alignItems: "center" }}></div>
            </div>
          </Paper>
        ))
      )}
    </div>
  );
}
