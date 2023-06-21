import { render } from "@testing-library/react";
import Hero from "@/components/Hero/Hero";

describe("Hero component renders correctly", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test("Title renders correctly", () => {
    const title = document.querySelector("h1");
    expect(title.textContent).toBe("Unleash your inner Barista");
  });

  test("Subtitle renders correctly", () => {
    const subtitle = document.querySelector(".mantine-jqsgn5");
    expect(subtitle.textContent).toBe(
      "Master the Art of Coffee Brewing with Our Exceptional Products"
    );
  });

  test("Shop now button renders correctly", () => {
    const shopNowButton = document.querySelector(
      ".mantine-UnstyledButton-root"
    );
    expect(shopNowButton.textContent).toBe("Shop now");
  });

  test("Overlay renders correctly", () => {
    const overlay = document.querySelector(".mantine-Overlay-root");
    expect(overlay).toBeInTheDocument();
  });

  test("Container renders correctly", () => {
    const container = document.querySelector(".mantine-Container-root");
    expect(container).toBeInTheDocument();
  });
});
