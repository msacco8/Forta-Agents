type GeneralTokenInfo = {
  tokenName: string;
  tokenSymbol: string;
  tokenTotalUsdValue: number;
};

type Erc20Info = GeneralTokenInfo & {
  tokenDecimal: number;
  tokenAmount: number;
};

type Erc721Info = GeneralTokenInfo & {
  tokenIds: number[];
};

type Erc1155Info = GeneralTokenInfo & {
  tokenIds: { [key: number]: number };
};

type TransactionInfo = {
  erc20: { [key: string]: Erc20Info };
  erc721: { [key: string]: Erc721Info };
  erc1155: { [key: string]: Erc1155Info };
};

type VictimInfo = {
  totalUsdValueAcrossAllTokens: number;
  transactions: {
    [key: string]: TransactionInfo;
  };
};

export type ScammerInfo = {
  mostRecentActivityByBlockNumber: number;
  firstAlertIdAppearance: string;
  victims: {
    [key: string]: VictimInfo;
  };
};

export type Erc721Transfer = {
  tx_hash: string;
  from_address: string;
  contract_address: string;
  token_name: string;
  token_symbol: string;
  token_id: string;
};
