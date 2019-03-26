export interface ISetStatus {
    type: string;
    payload: boolean;
}

export type IAppActions = ISetStatus;
