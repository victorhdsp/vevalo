import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Aside from "@/components/Aside";

const renderComponent = () => {
  return render(<Aside />);
}

describe("Aside", () => {
  it("should render", () => {
    renderComponent();
    
    expect(screen.getByText("Calculadora")).toBeInTheDocument();
    expect(screen.getByText("Perfil")).toBeInTheDocument();
    expect(screen.getByText("Histórico")).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });
});