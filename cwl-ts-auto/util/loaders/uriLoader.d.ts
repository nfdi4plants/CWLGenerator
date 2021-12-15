import { Loader, LoadingOptions } from '../internal';
export declare class _URILoader implements Loader {
    inner: Loader;
    scopedID: boolean;
    vocabTerm: boolean;
    scopedRef?: number;
    constructor(inner: Loader, scopedID: boolean, vocabTerm: boolean, scopedRef?: number);
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<any>;
}
