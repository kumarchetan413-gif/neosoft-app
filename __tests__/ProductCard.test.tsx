import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/ProductCard";

test("renders product card with content", () => {
  render(
    <ProductCard
      title="Test Product"
      description="Test description"
      price="$100"
      rating={4.5}
      image="/sample.jpg"
    />
  );

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("Test description")).toBeInTheDocument();
  expect(screen.getByText("$100")).toBeInTheDocument();
  expect(
    screen.getByText((content) => content.includes("4.5"))
  ).toBeInTheDocument();
});
