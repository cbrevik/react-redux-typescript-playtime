declare module "redux-devtools" {
    export function createDevTools(arg: any): any;
    export function persistState(sessionId: any, stateDeserializer?: Function, actionDeserializer?: Function): Function;
}