import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Account from './Account'; 

jest.mock('axios');

jest.mock('../../components/ISAForm/ISAForm', () => () => <div data-testid="ISAForm">ISAForm Mock</div>);
jest.mock('../../components/InvestmentTable/InvestmentTable', () => () => <div data-testid="InvestmentsTable">InvestmentsTable Mock</div>);
jest.mock('../../components/InvestmentDialog/InvestmentDialog', () => () => <div data-testid="InvestmentDialog">InvestmentDialog Mock</div>);

describe('Account Component', () => {
  const mockFunds = [{ id: '1', name: 'Fund A' }, { id: '2', name: 'Fund B' }];

  beforeEach(() => {
    jest.clearAllMocks();
    axios.get.mockResolvedValue({ data: mockFunds });
  });

  it('conditionally renders InvestmentsTable based on investments state', async () => {
    render(<Account />);
    expect(screen.queryByTestId('InvestmentsTable')).not.toBeInTheDocument();
  });
});
