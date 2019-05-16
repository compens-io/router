import { TransformerProviderType } from "compensio-common";

export function getTransformerProvider(): TransformerProviderType {
    return process.env.TRANSFORMER_PROVIDER as TransformerProviderType
}