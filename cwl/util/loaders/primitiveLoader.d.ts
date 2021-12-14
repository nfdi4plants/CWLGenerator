import { Loader, LoadingOptions } from '../internal';
export declare class _PrimitiveLoader implements Loader {
    typeGuard: (val: any) => boolean;
    constructor(tp: (val: any) => boolean);
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<any>;
}
