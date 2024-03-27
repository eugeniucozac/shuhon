import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App'; 

jest.mock('../../pages/Account/Account', () => {
  return function DummyAccount() {
    return <div>Account Page</div>;
  };
});

describe('App Component', () => {
  it('renders the Account component for the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Account Page')).toBeInTheDocument();
  });
});
