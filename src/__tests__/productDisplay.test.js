import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
import { CartContext } from "@/contexts/CartContext";

// Mock the products data
jest.mock("../api/products", () => ({
  getProducts: jest.fn(() =>
    Promise.resolve([
      {
        _id: "1",
        name: "Product 1",
        image: "https://example.com/product1.jpg",
        price: 9.99,
        isNew: true,
      },
      {
        _id: "2",
        name: "Product 2",
        image: "https://example.com/product2.jpg",
        price: 20.99,
        isNew: false,
      },
    ])
  ),
}));

describe("ProductDisplay", () => {
  test("renders product cards with correct data", async () => {
    // Arrange
    const toggleCart = jest.fn();
    const isCartOpen = false;

    render(
      <CartContext.Provider value={{ addToCart: jest.fn() }}>
        <ProductDisplay isCartOpen={isCartOpen} toggleCart={toggleCart} />
      </CartContext.Provider>
    );

    // Act
    await waitFor(() => {
      screen.getByText("Our Products");
    });

    // Assert
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByAltText("Product 1")).toBeInTheDocument();
    expect(screen.getByAltText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("$9.99")).toBeInTheDocument();
    expect(screen.getByText("$20.99")).toBeInTheDocument();
  });
});
