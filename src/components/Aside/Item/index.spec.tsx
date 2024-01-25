import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { AsideItem } from "@/components/Aside/Item";
import { Calculator } from "lucide-react";
import { pagePath } from "@/assets/data/sitemap";

const renderComponent = () => {
  return render(
    <AsideItem hasChevron icon={Calculator} title="Calculadora" href={pagePath.calculadora} />
  );
}

describe("AsideItem", () => {
  it("should render correctly", () => {
    renderComponent();
    
    const Item = screen.getByText("Calculadora")
    expect(Item).toBeInTheDocument();

    const Link = screen.getByRole("link")
    expect(Link).toHaveAttribute("href", pagePath.calculadora);
  });
});