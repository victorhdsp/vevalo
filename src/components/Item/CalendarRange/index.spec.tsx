import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import CalendarRange from "@/components/Item/CalendarRange";

const renderComponent = (props:{ onChange?: (worked_hours: number) => void; }) => {
  return render(<CalendarRange {...props} />);
}

const handleClick = jest.fn();

describe("CalendarRange", () => {
  it("should render correctly (default)", () => {
    renderComponent({ onChange: handleClick});
    
    expect(screen.getByText("Dias estimados")).toBeInTheDocument();
  });
});