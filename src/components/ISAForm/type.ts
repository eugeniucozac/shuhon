import { ChangeEvent, FormEvent } from "react";
import { FundType } from "../../type";

type ErrorsType = {
    selectedFund: boolean, 
    investmentAmount: boolean
}

export type ISAFormType = {
    selectedFund: FundType | null,
    funds: FundType[],
    errors?: ErrorsType,
    investmentAmount: number,
    handleFundChange: (event: any) => void;
    handleAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}