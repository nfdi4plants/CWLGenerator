import { Loader, LoadingOptions } from '../internal';
export declare class _ArrayLoader implements Loader {
    items: Loader[];
    constructor(items: Loader[]);
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<any>;
}
