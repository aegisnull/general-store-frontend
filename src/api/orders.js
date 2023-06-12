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
