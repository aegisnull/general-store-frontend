import { render, screen } from "@testing-library/react";
import { CartContext } from "@/contexts/CartContext";
import ShoppingCartSidebar from "@/components/ShoppingCart/ShoppingCart";

// Mock CartContext values
const mockCartItems = [
  { name: "Item 1", image: "image1.jpg", price: 10, quantity: 1 },
  { name: "Item 2", image: "image2.jpg", price: 20, quantity: 1 },
];
const mockSetCartItems = jest.fn();
const mockRemoveFromCart = jest.fn();

// Mock toggleCart function
const mockToggleCart = jest.fn();

test("renders empty cart message when cart items are not available", () => {
  render(
    <CartContext.Provider value={{ cartItems: undefined }}>
      <ShoppingCartSidebar isOpen={true} toggleCart={mockToggleCart} />
    </CartContext.Provider>
  );

  const emptyCartMessage = screen.getByText("Your cart is empty");
  expect(emptyCartMessage).toBeInTheDocument();
});

test("renders cart items and total when cart items are available", () => {
  render(
    <CartContext.Provider
      value={{
        cartItems: mockCartItems,
        setCartItems: mockSetCartItems,
        removeFromCart: mockRemoveFromCart,
      }}
    >
      <ShoppingCartSidebar isOpen={true} toggleCart={mockToggleCart} />
    </CartContext.Provider>
  );

  const item1Name = screen.getByText("Item 1");
  const item2Name = screen.getByText("Item 2");
  const item1Price = screen.getByText("$20.00");
  const item2Price = screen.getByText("$10.00");
  const totalItems = screen.getByText("Total items in cart: 2");
  const totalPrice = screen.getByText("Total price: $30.00");

  expect(item1Name).toBeInTheDocument();
  expect(item2Name).toBeInTheDocument();
  expect(item1Price).toBeInTheDocument();
  expect(item2Price).toBeInTheDocument();
  expect(totalItems).toBeInTheDocument();
  expect(totalPrice).toBeInTheDocument();
});

test("renders a button to remove item from cart", () => {
  render(
    <CartContext.Provider
      value={{
        cartItems: mockCartItems,
        setCartItems: mockSetCartItems,
        removeFromCart: mockRemoveFromCart,
      }}
    >
      <ShoppingCartSidebar isOpen={true} toggleCart={mockToggleCart} />
    </CartContext.Provider>
  );

  const removeItemButton = document.querySelector(
    ".shopping-cart__remove-item"
  );
  expect(removeItemButton).toBeInTheDocument();
});

test("renders a button to increase item count", () => {
  render(
    <CartContext.Provider
      value={{
        cartItems: mockCartItems,
        setCartItems: mockSetCartItems,
        removeFromCart: mockRemoveFromCart,
      }}
    >
      <ShoppingCartSidebar isOpen={true} toggleCart={mockToggleCart} />
    </CartContext.Provider>
  );

  const increaseItemCountButton = document.querySelector(
    ".shopping-cart__increase-count"
  );
  expect(increaseItemCountButton).toBeInTheDocument();
});

test("renders a button to decrease item count", () => {
  render(
    <CartContext.Provider
      value={{
        cartItems: mockCartItems,
        setCartItems: mockSetCartItems,
        removeFromCart: mockRemoveFromCart,
      }}
    >
      <ShoppingCartSidebar isOpen={true} toggleCart={mockToggleCart} />
    </CartContext.Provider>
  );

  const decreaseItemCountButton = document.querySelector(
    ".shopping-cart__decrease-count"
  );
  expect(decreaseItemCountButton).toBeInTheDocument();
});

test("renders delete confirmation modal", () => {
  render(
    <CartContext.Provider
      value={{
        cartItems: mockCartItems,
        setCartItems: mockSetCartItems,
        removeFromCart: mockRemoveFromCart,
      }}
    >
      <ShoppingCartSidebar isOpen={true} toggleCart={mockToggleCart} />
    </CartContext.Provider>
  );

  const deleteConfirmationModal = document.querySelector(
    ".shopping-cart__modal"
  );
  expect(deleteConfirmationModal).toBeInTheDocument();
});
