import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ISAFormType } from './type';
import { FundType } from '../../type';

const ISAForm = ({
  selectedFund,
  funds,
  errors,
  investmentAmount,
  handleFundChange,
  handleAmountChange,
  handleSubmit
}: ISAFormType) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={false}>
            <InputLabel id="fund-select-label">Select Fund</InputLabel>
            <Select
              labelId="fund-select-label"
              id="fund-select"
              value={selectedFund?.id}
              label="Select Fund"
              onChange={handleFundChange}
            >
              {funds.map((fund: FundType) => (
                <MenuItem key={fund.id} value={fund.id}>
                  {fund.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Investment Amount"
            type="number"
            variant="outlined"
            value={investmentAmount}
            onChange={handleAmountChange}
            error={errors?.investmentAmount}
            helperText={errors?.investmentAmount ? 'Invalid amount' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default ISAForm;
