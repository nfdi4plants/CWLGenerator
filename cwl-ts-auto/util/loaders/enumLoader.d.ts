import { Loader, LoadingOptions } from '../internal';
export declare class _EnumLoader implements Loader {
    symbols: string[];
    constructor(symbols: string[]);
    load(doc: string, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<any>;
}
