const SERVER_URL =
  "https://general-store-backend-production-62ab.up.railway.app";

export const createOrder = async (order) => {
  try {
    const response = await fetch(`${SERVER_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const createdOrder = await response.json();
    return createdOrder;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create order.");
  }
};

export const getOrders = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/orders`);
    const ordersJson = await response.json();
    return ordersJson.orders;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch orders.");
  }
};
