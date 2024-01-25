import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button, { Props } from "@/components/Button/Default";
import { Save } from "lucide-react";

const renderComponent = (props:Props) => {
  return render(<Button {...props} />);
}

const handleClick = jest.fn();

const createTest = (props:Props, expects: Props) => {
  renderComponent(props);

  const button = screen.getByRole('button');
  const text = screen.getByText(expects.children as string);
  
  expect(text).toBeInTheDocument();

  button.click();
  expect(handleClick).toBeCalled();
  expect(button.dataset.variant).toBe(expects.variant);
  expect(button.dataset.size).toBe(expects.size);
  expect(button.className).toBe(`button ${expects.className}`);
  expect(button.getAttribute('type')).toBe(expects.type);
  expect(button.getAttribute('aria-label')).toBe(expects.label);
  expect(button.querySelector('svg')).toBeInTheDocument();

  expect(button).toHaveClass('button');
}

describe("Button", () => {
  it("should render correctly (default)", () => {
    const componentProps: Props = { 
      children: 'Salvar orçamento', 
      onClick: handleClick,
      variant: 'primary',
      size: 'medium',
      className: 'button',
      icon: Save,
      label: 'Salvar',
      type: 'button'
    }

    createTest(componentProps, {
      children: 'Salvar orçamento',
      label: 'Salvar',
      type: 'button',
      className: 'button',
      size: 'medium',
      variant: 'primary',
    });
  });

  it("should render correctly (variant and size)", () => {
    const componentProps: Props = { 
      children: 'Salvar orçamento', 
      onClick: handleClick,
      variant: 'secondary',
      size: 'small',
      className: 'button',
      icon: Save,
      label: 'Salvar',
      type: 'button'
    }

    createTest(componentProps, {
      children: 'Salvar orçamento',
      label: 'Salvar',
      type: 'button',
      className: 'button',
      size: 'small',
      variant: 'secondary',
    });
  });
});