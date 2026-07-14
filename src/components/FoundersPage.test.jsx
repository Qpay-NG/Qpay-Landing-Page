import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

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
});
