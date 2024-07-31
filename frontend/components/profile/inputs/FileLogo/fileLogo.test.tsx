import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import InputFileLogo from './index';

describe('InputFileLogo', () => {
  URL.createObjectURL = vi.fn()
  URL.revokeObjectURL = vi.fn()

  afterEach(cleanup);

  //Estou assumindo que o ShadCN/UI funciona corretamente.

  it('deve usar tamanho padrão quando nenhum tamanho é fornecido', () => {
    const { container } = render(<InputFileLogo />);
    const avatarElement = container.querySelector(".relative");
    
    expect(avatarElement).toHaveClass('w-20');
    expect(avatarElement).toHaveClass('h-20');
  });

  it('deve permitir o upload de imagem', async () => {
    const screen = render(<InputFileLogo />);
    const { container } = screen;
    
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    const inputElement = container.querySelector("input");
    if (inputElement) {
      let fileName = null;
      await userEvent.upload(inputElement, file)
      if (inputElement.files){
        fileName = inputElement.files[0].name
      }
      expect(fileName).toBe("hello.png");
    };
  });
});
