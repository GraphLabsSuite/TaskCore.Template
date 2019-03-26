import { ISetStatus } from "../../types/IAppActions";
export interface App {
    status: boolean;
}
declare const _default: (state: App | undefined, action: ISetStatus) => App;
export default _default;
