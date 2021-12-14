import { Saveable, Loader, LoadingOptions } from '../internal';
export declare class _RecordLoader implements Loader {
    creatorFunc: (doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string) => Promise<Saveable>;
    constructor(createrFunc: (doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string) => Promise<Saveable>);
    load(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
}
