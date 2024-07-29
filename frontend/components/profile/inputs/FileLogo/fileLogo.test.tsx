import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import InputFileLogo from './index'; // ajuste o caminho conforme necessário

describe('InputFileLogo', () => {
  afterEach(cleanup); // Limpar o DOM após cada teste

  it('deve renderizar com a imagem inicial quando fornecida', async () => {
    const testSrc = 'https://github.com/shadcn.png';
    const test = render(<InputFileLogo src={testSrc} />);
    
    const imgElement = await waitFor(() => screen.findAllByRole("generic"));
    console.log(imgElement)
    // expect(imgElement).toHaveAttribute('src', testSrc);
  });

//   it('deve usar tamanho padrão quando nenhum tamanho é fornecido', () => {
//     render(<InputFileLogo />);
    
//     const avatarElement = screen.getByRole('img');
//     expect(avatarElement).toHaveClass('w-20'); // Verifica o tamanho padrão
//     expect(avatarElement).toHaveClass('h-20'); // Verifica o tamanho padrão
//   });

//   it('deve permitir o upload de imagem e atualizar a imagem', async () => {
//     render(<InputFileLogo />);
    
//     const file = new File(['hello'], 'hello.png', { type: 'image/png' });
//     const inputElement = screen.getByRole('textbox');
    
//     await userEvent.upload(inputElement, file); // Simula o upload do arquivo
    
//     const imgElement = screen.getByRole('img');
//     expect(imgElement).toHaveAttribute('src', expect.stringContaining('blob:'));
//   });

//   it('deve revogar URL antiga ao fazer upload de uma nova imagem', async () => {
//     const revokeObjectURLSpy = vi.spyOn(URL, 'revokeObjectURL');
    
//     render(<InputFileLogo />);
    
//     const file1 = new File(['hello'], 'hello1.png', { type: 'image/png' });
//     const file2 = new File(['world'], 'world.png', { type: 'image/png' });
//     const inputElement = screen.getByRole('textbox');
    
//     await userEvent.upload(inputElement, file1);
//     await userEvent.upload(inputElement, file2);
    
//     expect(revokeObjectURLSpy).toHaveBeenCalled();
//   });

//   it('deve abrir o seletor de arquivos ao clicar no avatar', () => {
//     render(<InputFileLogo />);
    
//     const fileInputRef = screen.getByRole('textbox');
//     const avatarElement = screen.getByRole('img');
    
//     fireEvent.click(avatarElement); // Simula o clique no avatar
//     expect(fileInputRef).toBeFocused();
//   });
});
