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
    handleFundChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void;
    handleAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}