import { render, screen } from "@testing-library/react";
import { getOrders } from "../api/orders";
import OrderHistory from "@/components/OrderHistory/OrderHistory";

jest.mock("../api/orders", () => ({
  getOrders: jest.fn(),
}));

test("renders no orders message when there are no orders", async () => {
  getOrders.mockResolvedValue([]);

  render(<OrderHistory />);

  const noOrdersMessage = await screen.findByText("No orders found");
  expect(noOrdersMessage).toBeInTheDocument();

  expect(getOrders).toHaveBeenCalledTimes(1);
});
