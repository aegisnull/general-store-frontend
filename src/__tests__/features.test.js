import { render } from "@testing-library/react";
import FeaturesCards from "@/components/Features/Features";

describe("FeaturesCards", () => {
  test("renders feature titles", () => {
    // Arrange
    render(<FeaturesCards />);

    // Act
    const featureTitles = document.querySelectorAll(".features__title");

    // Assert
    expect(featureTitles).toHaveLength(3);
    expect(featureTitles[0]).toBeInTheDocument();
    expect(featureTitles[1]).toBeInTheDocument();
    expect(featureTitles[2]).toBeInTheDocument();
  });

  test("renders feature descriptions", () => {
    // Arrange
    render(<FeaturesCards />);

    // Act
    const featureDescriptions = document.querySelectorAll(
      ".features__description"
    );

    // Assert
    expect(featureDescriptions).toHaveLength(3);
    expect(featureDescriptions[0]).toBeInTheDocument();
    expect(featureDescriptions[1]).toBeInTheDocument();
    expect(featureDescriptions[2]).toBeInTheDocument();
  });
});
