const SAFETY_MODULE_ADDRESS: string = "0x65f7BA4Ec257AF7c55fd5854E5f6356bBd0fb8EC";
const LIQUIDITY_MODULE_ADDRESS: string = "0x5Aa653A076c1dbB47cec8C1B4d152444CAD91941";
export const MODULE_ADDRESSES: string[] = [SAFETY_MODULE_ADDRESS, LIQUIDITY_MODULE_ADDRESS]; // Mainnet addresses
// To test the transactions in the README on the Kovan testnet, comment out the line above
// and uncomment the line below
// export const MODULE_ADDRESSES: string[] = ["0x6dEA282B05C76cC9249513554A3C4Bf646908344"]; // Proxy Kovan ETH testnet address

const BLACKOUT_WINDOW_CHANGED_EVENT: string = "event BlackoutWindowChanged(uint256 blackoutWindow)";
const EPOCH_PARAMS_CHANGED_EVENT: string = "event EpochParametersChanged((uint128, uint128) epochParameters)";
const REWARDS_PER_SECOND_UPDATED_EVENT: string = "event RewardsPerSecondUpdated(uint256 emissionPerSecond)";
export const EVENTS: string[] = [
  BLACKOUT_WINDOW_CHANGED_EVENT,
  EPOCH_PARAMS_CHANGED_EVENT,
  REWARDS_PER_SECOND_UPDATED_EVENT,
];

export const BLACKOUT_WINDOW_CHANGED_SIG: string = "BlackoutWindowChanged(uint256)";
export const EPOCH_PARAMS_CHANGED_SIG: string = "EpochParametersChanged((uint128,uint128))";
export const REWARDS_PER_SECOND_UPDATED_SIG: string = "RewardsPerSecondUpdated(uint256)";
