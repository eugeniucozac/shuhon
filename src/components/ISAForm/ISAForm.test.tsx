import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ISAForm from './ISAForm';

const funds = [
  { id: '1', name: 'Fund A' },
  { id: '2', name: 'Fund B' }
];

describe('ISAForm Component', () => {
  const handleFundChange = jest.fn();
  const handleAmountChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    render(
      <ISAForm
        selectedFund={funds[0]}
        funds={funds}
        investmentAmount={1000}
        handleFundChange={handleFundChange}
        handleAmountChange={handleAmountChange}
        handleSubmit={handleSubmit}
      />
    );
  });

  it('renders correctly with initial props', () => {
    expect(screen.getByLabelText('Select Fund')).toBeInTheDocument();
    expect(screen.getByLabelText('Investment Amount')).toHaveValue(1000);
  });

  it('allows changing the investment amount', async () => {
    const input = screen.getByLabelText('Investment Amount');
    fireEvent.change(input, { target: { value: '2000' } });
    expect(handleAmountChange).toHaveBeenCalledTimes(1);
  });

  it('calls handleSubmit on form submission', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    userEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
