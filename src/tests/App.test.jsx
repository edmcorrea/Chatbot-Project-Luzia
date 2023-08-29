import '@testing-library/jest-dom';
import { expect, test, describe, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithContextAPI from './helper/renderWithContextAPI';

describe('App', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('btnLuzia to be in the document', () => {
    render(<App />);

    const btnCollapse = screen.getByRole('button');
    expect(btnCollapse).toBeInTheDocument();
  });

  test('when clicking on btnLuzia, the chatbot should appear', () => {
    const providerProps = {
      value: {
        Data: {
          Username: '',
          Password: '',
        },
      },
    };
    renderWithContextAPI(<App />, { providerProps });

    const collapseBtn = screen.getByTestId('collapseBtn');

    userEvent.click(collapseBtn);

    const textLuzia = screen.getByText('Conversation with Luzia');
    expect(textLuzia).toBeInTheDocument();
  });
});