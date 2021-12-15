import { Loader, LoadingOptions } from '../internal';
export declare class _SecondaryDSLLoader implements Loader {
    inner: Loader;
    constructor(inner: Loader);
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<any>;
}
