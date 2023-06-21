import { render, screen } from "@testing-library/react";
import Checkout from "@/pages/checkout.js";
import "@testing-library/jest-dom";
import { CartContext } from "@/contexts/CartContext";

describe("Checkout", () => {
  let mockCartItems;

  beforeEach(() => {
    mockCartItems = [
      {
        name: "Colombian Dark Roast",
        image:
          "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-8.png?v=1675662787&width=720",
        price: 12.99,
        isNew: false,
      },
      {
        name: "Ethiopian Yirgacheffe",
        image:
          "https://cdn.shopify.com/s/files/1/0674/3411/9456/products/shop-7.png?v=1675662588&width=720",
        price: 14.99,
        isNew: false,
      },
    ];

    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Checkout />
      </CartContext.Provider>
    );
  });

  test("renders checkout text", () => {
    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });

  test("renders checkout form", () => {
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
  });

  test("cart items are displayed", () => {
    expect(screen.getByText("Colombian Dark Roast")).toBeInTheDocument();
    expect(screen.getByText("Ethiopian Yirgacheffe")).toBeInTheDocument();
  });

  test("cart total gets calculated", () => {
    const totalAmount = mockCartItems.reduce(
      (total, item) => total + item.price,
      0
    );
    const expectedTotalText = `$${totalAmount.toFixed(2)}`;

    expect(screen.getByText(expectedTotalText)).toBeInTheDocument();
  });
});
