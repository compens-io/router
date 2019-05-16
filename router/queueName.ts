import { IEvent } from "compensio-common";

export function getQueueName(event: IEvent): string {
    const varName = getQueueVarName(event);
    return process.env.get[varName];
}

function getQueueVarName(event: IEvent): string {
    return `${event.eventType.toUpperCase()}_${event.eventAction.toUpperCase()}_QUEUE_NAME`
}
