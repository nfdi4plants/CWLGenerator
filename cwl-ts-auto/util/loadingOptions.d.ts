import { Dictionary, Fetcher } from './internal';
export declare class LoadingOptions {
    fetcher: Fetcher;
    idx: Dictionary<any>;
    fileUri?: string;
    namespaces?: Dictionary<string>;
    schemas?: Dictionary<string>;
    copyFrom?: LoadingOptions;
    originalDoc: any;
    vocab: Dictionary<string>;
    rvocab: Dictionary<string>;
    constructor({ fileUri, namespaces, schemas, originalDoc, copyFrom, fetcher }: {
        fileUri?: string;
        namespaces?: Dictionary<string>;
        schemas?: Dictionary<string>;
        originalDoc?: any;
        copyFrom?: LoadingOptions;
        fetcher?: Fetcher;
    });
}
