export const SCAM_DETECTOR_BOT_ID = "0x1d646c4045189991fdfd24a66b192a294158b839a6ec121d740474bdacb3ab23";
export const SCAM_DETECTOR_ALERT_IDS = ["SCAM-DETECTOR-FRAUDULENT-NFT-ORDER"];

export const ONE_DAY_IN_SECS = 60 * 60 * 24;
export const THIRTY_DAYS_IN_SECS = ONE_DAY_IN_SECS * 30;
export const EIGHTY_DAYS_IN_MS = ONE_DAY_IN_SECS * 80 * 1000; // Max value that returns alert query results after testing

export const NINETY_DAYS = 90;

export const FRAUD_NFT_SALE_VALUE_UPPER_THRESHOLD = 100; // In Wei
export const FP_PROFIT_THRESHOLD = 500_000; // In USD
export const FP_MIN_VICTIMS_THRESHOLD = 1;
export const FP_MAX_VICTIMS_THRESHOLD = 20;
export const FP_SELLER_TO_BUYER_TXS_THRESHOLD = 3;
export const FP_BUYER_TO_SELLER_MIN_TRANSFERRED_TOKEN_VALUE = 10; // In USD

export const MAX_OBJECT_SIZE = 4 * 1024 * 1024; // 4 MB

export const VICTIMS_DB_KEY = "nm-victim-loss-identifier-victims-object";
export const SCAMMERS_DB_KEY = "nm-victim-loss-identifier-scammers-object";

export const EXCHANGE_CONTRACT_ADDRESSES: Record<string, string> = {
  // Ethereum
  LooksRare: "0x59728544B08AB483533076417FbBB2fD0B17CE3a", // LooksRare: Exchange
  OpenSea: "0x00000000006c3852cbEf3e08E8dF289169EdE581", // OpenSea: Seaport 1.1
  OpenSea2: "0x00000000000001ad428e4906aE43D8F9852d0dD6", // OpenSea: Seaport 1.4
  OpenSea3: "0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC", // OpenSea: Seaport 1.5
  Rarible: "0x9757F2d2b135150BBeb65308D4a91804107cd8D6", // Rarible: Exchange V2
  SuperRare: "0x6D7c44773C52D396F43c2D511B81aa168E9a7a42",
  X2Y2: "0x74312363e45DCaBA76c59ec49a7Aa8A65a67EeD3",
  Blur: "0x000000000000ad05ccc4f10045630fb830b95127",
  BlurMarketplace2: "0x39da41747a83aee658334415666f3ef92dd0d541",
  BlurMarketplace3: "0xb2ecfe4e4d61f8790bbb9de2d1259b9e2410cea5",
  GhostMarketEth: "0xfB2F452639cBB0850B46b20D24DE7b0a9cCb665f",
};
