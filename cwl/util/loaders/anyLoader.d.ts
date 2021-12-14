import { Loader, LoadingOptions } from '../internal';
export declare class _AnyLoader implements Loader {
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string | undefined): Promise<any>;
}
