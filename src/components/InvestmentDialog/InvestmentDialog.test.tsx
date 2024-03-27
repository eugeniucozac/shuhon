import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import InvestmentDialog from './InvestmentDialog';

describe('InvestmentDialog Component', () => {
  const handleClose = jest.fn();

  it('renders the dialog when open', () => {
    render(<InvestmentDialog open={true} handleClose={handleClose} />);
    expect(screen.getByText(/investment consideration/i)).toBeInTheDocument();
    expect(screen.getByText(/thanks for considering investing more than \£25,000/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });


  it('calls handleClose when the "OK" button is clicked', async () => {
    render(<InvestmentDialog open={true} handleClose={handleClose} />);
    await userEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
