import { ChainId, ChainKey } from "../enums";
export declare function getMnemonic(networkName?: string): string;
export declare function accounts(chainKey?: string): {
    mnemonic: string;
};
export declare type HardhatNetwork = {
    [network: string]: any;
};
export declare type HardhatNetworks = {
    [chainKey in ChainKey]?: any;
};
export declare function setupNetwork(networkConfig: any, chainIds: ChainId[]): HardhatNetworks;
export declare function setupNetworks(chainIds: [ChainId, {
    rpcIndex?: number;
}][]): HardhatNetworks;
