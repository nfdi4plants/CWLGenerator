import { Dictionary, Loader, LoadingOptions } from '../internal';
export declare class _TypeDSLLoader implements Loader {
    typeDSLRegex: RegExp;
    inner: Loader;
    refScope?: number;
    constructor(inner: Loader, refScope?: number);
    resolve(doc: string, baseuri: string, loadingOptions: LoadingOptions): Array<Dictionary<string> | string> | Dictionary<string> | string;
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<any>;
}
