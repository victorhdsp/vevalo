import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputWeek from './week';
import userEvent from '@testing-library/user-event';

describe('InputIncrementalNumber', () => {
  URL.createObjectURL = vi.fn()
  URL.revokeObjectURL = vi.fn()

  afterEach(cleanup);

  //Estou assumindo que o ShadCN/UI funciona corretamente.

  it('Verifica mantem a mesma quantidade de inputs', async () => {
    const { container } = render(<InputWeek />);
    let week = container.querySelectorAll("input");
    let seg = container.querySelector("input[name='Seg']") as HTMLInputElement;
    expect(seg?.value).toBe("0");
    expect(week.length).toBe(7);
    if (seg) {
      await userEvent.type(seg, "1")
    }
    expect(seg?.value).toBe("1");
    expect(week.length).toBe(7);
  });
});
