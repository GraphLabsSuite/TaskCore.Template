export interface Func<T> {
    ([...args]: any): T;
}
export declare function returnType<T>(func: Func<T>): T;
