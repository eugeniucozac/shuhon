import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvestmentsTable from './InvestmentTable';

jest.mock('date-fns', () => ({
  ...jest.requireActual('date-fns'),
  format: jest.fn(() => 'Mocked Date'),
}));

describe('InvestmentsTable Component', () => {
  const investments = [
    { fundName: { id: '1', name: 'Fund A' }, investedAmount: 1000, time: new Date('2021-01-01T00:00:00Z') },
    { fundName: { id: '2', name: 'Fund B' }, investedAmount: 2000, time: new Date('2021-02-01T00:00:00Z') },
  ];

  it('renders correctly with investments', () => {
    render(<InvestmentsTable investments={investments} />);

    expect(screen.getByText('Fund Name')).toBeInTheDocument();
    expect(screen.getByText('Invested Amount (£)')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();

    expect(screen.getByText('Fund A')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();

    expect(screen.getByText('Fund B')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
  });

  it('displays no rows when investments is empty', () => {
    render(<InvestmentsTable investments={[]} />);
    
    expect(screen.getByText('Fund Name')).toBeInTheDocument();
    expect(screen.getByText('Invested Amount (£)')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();

    const tableRows = screen.queryAllByRole('row');
    expect(tableRows.length).toBe(1);
  });
});
