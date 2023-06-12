import { Card, Text, Image } from "@mantine/core";
import { useState, useEffect } from "react";
import { getOrders } from "@/api/orders";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await getOrders();
        setOrders(orders);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Card shadow="xs" padding="md" style={{ marginTop: "4rem" }}>
      <Text
        align="center"
        weight={500}
        size="lg"
        style={{ marginBottom: "1rem" }}
      >
        Order History
      </Text>
      {orders.length === 0 ? (
        <Text align="center" color="dimmed">
          No orders found
        </Text>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <Card shadow="xs" padding="md" style={{ marginBottom: "1rem" }}>
                <Text>
                  <strong>Name:</strong> {order.name}
                </Text>
                <Text>
                  <strong>Address:</strong> {order.address}
                </Text>
                <Text>
                  <strong>Items:</strong>
                </Text>
                <ul>
                  {order.items.map((item) => (
                    <li
                      key={item.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <Image
                        src={item.image}
                        width={50}
                        height={50}
                        alt={item.name}
                        style={{ marginRight: "1rem" }}
                      />
                      <div>
                        <Text>
                          <strong>Name:</strong> {item.name}
                        </Text>
                        <Text>
                          <strong>Price:</strong> ${item.price.toFixed(2)}
                        </Text>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default OrderHistory;
