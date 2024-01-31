import { ChainId, ChainKey, ChainListId, ChainStage } from "../enums";
export declare function getNetworkNameByEndpointId(endpointId: ChainId | number): ChainKey;
export declare function getEndpointIdByName(networkName: ChainKey | string): ChainId;
export declare function getNetworksForEnv(chainStageAsString: string): ChainKey[];
export declare function getChainStage(chainId: number): ChainStage;
export declare function getChainKey(chainId: ChainId): ChainKey;
export declare function getChainListId(chainId: ChainId): ChainListId;
export declare function getChainIdByChainKey(chainKey: ChainKey): ChainId;
