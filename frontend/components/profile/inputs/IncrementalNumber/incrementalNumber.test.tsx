import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputIncrementalNumber from './input';
import userEvent from '@testing-library/user-event';

describe('InputIncrementalNumber', () => {
  URL.createObjectURL = vi.fn()
  URL.revokeObjectURL = vi.fn()

  afterEach(cleanup);

  //Estou assumindo que o ShadCN/UI funciona corretamente.

  it('Verifica se o valor de modificação padrão é 100', async () => {
    const { container } = render(<InputIncrementalNumber />);
    const increase = container.querySelector("[name='increase']");
    let input = container.querySelector("input")
    
    expect(input?.value).toBe("0");
    if (increase && input) {
      await userEvent.click(increase)
    }
    expect(input?.value).toBe("100");
  });

  it('Verifica se o valor de modificação é o passado no props', async () => {
    const { container } = render(<InputIncrementalNumber valueModifier={500} />);
    const increase = container.querySelector("[name='increase']");
    let input = container.querySelector("input")
    
    expect(input?.value).toBe("0");
    if (increase && input) {
      await userEvent.click(increase)
    }
    expect(input?.value).toBe("500");
  });

  it('Verifica se o botão de menos e mais estão funcionando', async () => {
    const { container } = render(<InputIncrementalNumber />);
    const increase = container.querySelector("[name='increase']");
    const decrease = container.querySelector("[name='decrease']");
    let input = container.querySelector("input")
    
    expect(input?.value).toBe("0");
    if (increase && input) {
      await userEvent.click(increase)
    }
    expect(input?.value).toBe("100");
    if (decrease && input) {
      await userEvent.click(decrease)
    }
    expect(input?.value).toBe("0");
  });
});
