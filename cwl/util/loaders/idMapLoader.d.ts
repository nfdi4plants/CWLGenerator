import { Loader, LoadingOptions } from '../internal';
export declare class _IdMapLoader implements Loader {
    inner: Loader;
    mapSubject: string;
    mapPredicate?: string;
    constructor(inner: Loader, mapSubject: string, mapPredicate?: string);
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<any>;
}
