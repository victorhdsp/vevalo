import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ButtonNew, { Props } from "@/components/Button/New";

const renderComponent = (props:Props) => {
  return render(<ButtonNew {...props} />);
}

const handleClick = jest.fn();

describe("ButtonNew", () => {
  it("should render correctly (default)", () => {
    renderComponent({ onClick: handleClick});
    const text = screen.getByText("Adicionar Novo");
    expect(text).toBeInTheDocument();
    
    const button = screen.getByRole('button');
    button.click();
    expect(handleClick).toBeCalled();
  });
});