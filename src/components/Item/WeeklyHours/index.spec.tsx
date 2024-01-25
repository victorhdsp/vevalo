import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { WeeklyHourType } from "@/assets/data/type";
import WeeklyHours from "@/components/Item/WeeklyHours";

const renderComponent = (props:{ onChange?: (days: WeeklyHourType[]) => void }) => {
  return render(<WeeklyHours {...props} />);
}

const handleChange = jest.fn();

describe("WeeklyHours", () => {
  it("should render correctly", () => {
    renderComponent({ onChange: handleChange});
    
    expect(screen.getByText("Dias da semana")).toBeInTheDocument();

    const inputs = screen.getAllByRole('spinbutton')
    expect(inputs).toHaveLength(7)

    inputs.forEach(input => {
      input.focus()
      fireEvent.input(input, {target: {value: 8}})

      expect(input).toHaveValue(8)
    })

    expect(handleChange).toBeCalledWith([
      { label: 'Seg', name: 'seg', value: '8' },
      { label: 'Ter', name: 'ter', value: '8' },
      { label: 'Qua', name: 'qua', value: '8' },
      { label: 'Qui', name: 'qui', value: '8' },
      { label: 'Sex', name: 'sex', value: '8' },
      { label: 'Sab', name: 'sab', value: '0' },
      { label: 'Dom', name: 'dom', value: '0' }
    ])

  });
});