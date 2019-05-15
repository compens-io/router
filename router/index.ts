import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Transformer, TransformerProvider } from "transformers";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res =  {
        status: 200,
        body: Transformer.transform(TransformerProvider.GITHUB, req.body),
    }
};

export default httpTrigger;
