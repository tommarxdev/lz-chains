import { ChainId, ChainKey, ChainListId, ChainStage } from "../enums"

// @deprecated - use getChainKey
export function getNetworkNameByEndpointId(endpointId: ChainId | number): ChainKey {
    return getChainKey(endpointId)
}

// @deprecated - use getChainIdByChainKey
export function getEndpointIdByName(networkName: ChainKey | string): ChainId {
    return getChainIdByChainKey(networkName as ChainKey)
}

const CHAIN_STAGE: Record<string, ChainStage> = {
    mainnet: ChainStage.MAINNET,
    testnet: ChainStage.TESTNET,
    sandbox: ChainStage.TESTNET_SANDBOX,
}

export function getNetworksForEnv(chainStageAsString: string) {
    const chainStage = CHAIN_STAGE[chainStageAsString]
    if (!chainStage) throw new Error(`No ChainStage for ${chainStageAsString}`)
    const networks: ChainKey[] = []
    for (const chainIdAsString in ChainId) {
        const chainId = Number(chainIdAsString)
        if (!Number.isFinite(chainId)) continue
        if (getChainStage(chainId) === (chainStage as any)) {
            networks.push(getChainKey(chainId))
        }
    }
    return networks
}

export function getChainStage(chainId: number): ChainStage {
    if (chainId < 10000) return ChainStage.MAINNET
    if (chainId < 20000) return ChainStage.TESTNET
    return ChainStage.TESTNET_SANDBOX
}

export function getChainKey(chainId: ChainId): ChainKey {
    // @ts-ignore
    const key = ChainId[chainId]
    // @ts-ignore
    const chainKey: ChainKey = ChainKey[key]
    if (chainKey) return chainKey
    throw new Error(`No ChainKey for ${chainId}`)
}

export function getChainListId(chainId: ChainId): ChainListId {
    // @ts-ignore
    const key = ChainId[chainId]
    // @ts-ignore
    const chainListId: ChainListId = ChainListId[key]
    if (chainListId) return chainListId
    throw new Error(`No ChainListId for ${chainId}`)
}

export function getChainIdByChainKey(chainKey: ChainKey): ChainId {
    // @ts-ignore
    const key = ChainKey[chainKey]
    // @ts-ignore
    const chainId: ChainId = ChainId[key]
    if (chainId) return chainId
    throw new Error(`No chainId for ${chainKey}`)
}