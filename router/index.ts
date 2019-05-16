import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Transformer } from "transformers";
import { IEvent, TransformerProviderType } from "compensio-common";
import { getQueueName } from "./queueName";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const transformed: IEvent = Transformer.transform(TransformerProviderType.GITHUB, req.body);
    const queueName = getQueueName(transformed);
    // sendToQueue(queueName, transformed.payload);
};

export default httpTrigger;
