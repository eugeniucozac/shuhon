import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import ISAForm from '../../components/ISAForm/ISAForm';
import InvestmentsTable from '../../components/InvestmentTable/InvestmentTable';
import InvestmentDialog from '../../components/InvestmentDialog/InvestmentDialog';
import { InvestmentType, FundType } from '../../type';

const Account = () => {
    const [funds, setFunds] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedFund, setSelectedFund] = useState<FundType | null>(null);
    const [investmentAmount, setInvestmentAmount] = useState(0);
    const [investments, setInvestments] = useState<InvestmentType[]>([]);
    const [errors, setErrors] = useState({ selectedFund: false, investmentAmount: false });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/funds');
          setFunds(response.data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, []);

    const validateForm = () => {
      let isValid = true;
      const newErrors = { selectedFund: false, investmentAmount: false };
      
      if (!selectedFund) {
        newErrors.selectedFund = true;
        isValid = false;
      }
      if (!investmentAmount || isNaN(investmentAmount) || investmentAmount <= 0) {
        newErrors.investmentAmount = true;
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };

    const handleFundChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const fundId = event.target.value as string;
      const fund = funds.find((f: FundType) => f.id === fundId);
      setSelectedFund(fund || null);
    };

    const handleAmountChange = (event: ChangeEvent<any>) => {
      setInvestmentAmount(event.target.value);
    };

    const handleOpenDialog = () => {
      setOpen(true);
    };
  
    const handleCloseDialog = () => {
      setOpen(false);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (validateForm()) {
        setInvestments((prevState: any) => [
          ...prevState,
          { fundName: selectedFund, investedAmount: Number(investmentAmount), time: new Date() }
        ]);
        if(Number(investmentAmount) >= 25000){
          handleOpenDialog();
        }
        setSelectedFund(null);
        setInvestmentAmount(0);
      }
    };

    return (
      <Layout>
        <Box 
          padding={10}
        >
          <Grid 
            container 
            spacing={2} 
            columns={{ xs: 4, sm: 8, md: 12 }} 
          >
            {funds.length 
              ?
              <Grid item xs={6}> 
                <ISAForm
                  funds={funds}
                  selectedFund={selectedFund} 
                  investmentAmount={investmentAmount}
                  errors={errors}
                  handleAmountChange={handleAmountChange}
                  handleFundChange={handleFundChange}
                  handleSubmit={handleSubmit}
                />
              </Grid>
              : null}
            {investments.length 
              ?
              <Grid item xs={6}>
                <InvestmentsTable investments={investments} />
              </Grid>
              : null}
            <InvestmentDialog open={open} handleClose={handleCloseDialog}  />
          </Grid>
        </Box>
      </Layout>
    )
}

export default Account