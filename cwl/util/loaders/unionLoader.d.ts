import { Loader, LoadingOptions, Saveable } from '../internal';
export declare class _UnionLoader implements Loader {
    alternates: Loader[];
    constructor(alternates: Loader[]);
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
}
