import { render } from "@testing-library/react";
import Footer from "@/components/Footer/Footer";

describe("Footer", () => {
  test("renders Footer component", () => {
    // Arrange
    render(<Footer />);

    // Act
    const mantineLogo = document.querySelector("svg");
    const socialIcons = document.querySelectorAll(
      ".mantine-UnstyledButton-root"
    );

    // Assert
    expect(mantineLogo).toBeInTheDocument();
    expect(socialIcons).toHaveLength(3);
    expect(socialIcons[0]).toBeInTheDocument();
    expect(socialIcons[1]).toBeInTheDocument();
    expect(socialIcons[2]).toBeInTheDocument();
  });
});
