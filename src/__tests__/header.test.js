import { render } from "@testing-library/react";
import Header from "@/components/Header/Header";
import { CartContext } from "@/contexts/CartContext";
import { UserContext } from "@/contexts/UserContext";

describe("Header", () => {
  let cartItems;
  let links;

  beforeEach(() => {
    cartItems = [
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

    links = [
      {
        link: "/",
        label: "Shop",
      },
      {
        link: "/about",
        label: "About",
      },
      {
        link: "/contact",
        label: "Contact Us",
      },
    ];

    render(
      <UserContext.Provider value={{ loginStatus: false }}>
        <CartContext.Provider value={{ cartItems: cartItems }}>
          <Header links={links} />
        </CartContext.Provider>
      </UserContext.Provider>
    );
  });

  test("renders Header component", () => {
    // Arrange
    const mantineLogo = document.querySelector(".header__logo");
    const headerLinks = document.querySelectorAll(".header__link");
    const cartIcon = document.querySelector(".header__cart");
    const loginButton = document.querySelector(".header__login");

    // Assert
    expect(mantineLogo).toBeInTheDocument();
    expect(headerLinks).toHaveLength(links.length);
    expect(headerLinks[0]).toBeInTheDocument();
    expect(headerLinks[1]).toBeInTheDocument();
    expect(headerLinks[2]).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("login modal should exist", () => {
    //  Arrange
    const loginModal = document.querySelector(".header__login-modal");

    // Assert
    expect(loginModal).toBeInTheDocument();
  });

  test("signup modal should exist", () => {
    //  Arrange
    const signupModal = document.querySelector(".header__signup-modal");

    // Assert
    expect(signupModal).toBeInTheDocument();
  });
});
