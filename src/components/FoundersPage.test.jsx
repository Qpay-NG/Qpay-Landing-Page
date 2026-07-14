import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';

afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
});

describe('Founders route', () => {
  it('renders the founders page when the pathname is /founders', async () => {
    window.history.replaceState({}, '', '/founders');
    const { default: App } = await import('../App.jsx');

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /built by people who understand why payments cannot wait/i,
      })
    ).toBeInTheDocument();
  });

  it('shows all three founders with roles and statement copy', async () => {
    window.history.replaceState({}, '', '/founders');
    const { default: App } = await import('../App.jsx');

    render(<App />);

    expect(screen.getByText(/olagbegi eniola/i)).toBeInTheDocument();
    expect(screen.getByText(/co-founder & ceo/i)).toBeInTheDocument();
    expect(
      screen.getByText(/i built this to solve a problem/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/nneji joseph/i)).toBeInTheDocument();
    expect(screen.getByText(/coo & marketing lead/i)).toBeInTheDocument();
    expect(
      screen.getByText(/practical answer to the everyday payment barriers/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/jack wilson/i)).toBeInTheDocument();
    expect(screen.getByText(/^cto$/i)).toBeInTheDocument();
    expect(
      screen.getByText(/commerce should not pause because the network does/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /portrait of olagbegi eniola/i })
    ).toHaveAttribute('src', '/founders-eniola.jpg');
    expect(
      screen.getByRole('img', { name: /portrait of nneji joseph/i })
    ).toHaveAttribute('src', '/founders-joseph.jpeg');
    expect(
      screen.getByRole('img', {
        name: /default profile illustration for jack wilson/i,
      })
    ).toBeInTheDocument();
  });

  it('adds founders under the company footer links', async () => {
    const { default: App } = await import('../App.jsx');

    render(<App />);

    expect(screen.queryByText(/olagbegi eniola/i)).not.toBeInTheDocument();

    const companyLinks = screen.getByRole('navigation', {
      name: /company links/i,
    });
    const foundersLink = within(companyLinks).getByRole('link', {
      name: /founders/i,
    });

    expect(foundersLink).toHaveAttribute('href', '/founders');
  });
});
