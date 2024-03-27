import { format } from 'date-fns';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { InvestmentType } from '../../type';
import { InvestmentsTableType } from './type';

const InvestmentsTable = ({ investments }: InvestmentsTableType) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Fund Name</TableCell>
            <TableCell align="right">Invested Amount (£)</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {investments?.map((row: InvestmentType) => (
            <TableRow
              key={row.fundName.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fundName.name}
              </TableCell>
              <TableCell align="right">{row.investedAmount}</TableCell>
              <TableCell align="right">{format(row.time, 'dd/MM/yyyy HH:mm:ss')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InvestmentsTable;
