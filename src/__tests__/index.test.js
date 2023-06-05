import { render, screen } from "@testing-library/react";
import Home from "@/pages/index.js";
import { CartContext } from "@/contexts/CartContext";

describe("Home", () => {
  const mockCartItems = [
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

  // Section 1: Hero
  test("renders hero text - part 1", () => {
    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Home />
      </CartContext.Provider>
    );
    expect(screen.getByText("Unleash your inner")).toBeInTheDocument();
  });

  test("renders hero text - part 2", () => {
    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Home />
      </CartContext.Provider>
    );
    expect(
      screen.getByText(
        "Master the Art of Coffee Brewing with Our Exceptional Products"
      )
    ).toBeInTheDocument();
  });

  // Section 2: Features
  test("renders Free shipping feature", () => {
    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Home />
      </CartContext.Provider>
    );
    expect(screen.getByText("Free shipping")).toBeInTheDocument();
  });

  test("renders Best Quality feature", () => {
    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Home />
      </CartContext.Provider>
    );
    expect(screen.getByText("Best quality")).toBeInTheDocument();
  });

  test("renders Fair Prices feature", () => {
    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Home />
      </CartContext.Provider>
    );
    expect(screen.getByText("Fair prices")).toBeInTheDocument();
  });

  // Section 3: ProductDisplay
  test("renders ProductDisplay component", () => {
    render(
      <CartContext.Provider value={{ cartItems: mockCartItems }}>
        <Home />
      </CartContext.Provider>
    );

    expect(screen.getByText("Our Products")).toBeInTheDocument();
  });
});
