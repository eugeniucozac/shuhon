export type FundType = {
    id: string;
    name: string;
};

export type InvestmentType = {
    fundName: FundType,
    investedAmount: number,
    time: string
}