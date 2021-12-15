import { LoadingOptions } from '../internal';
export interface Loader {
    load: (doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string) => Promise<any>;
}
export declare function loadField(val: any, fieldType: Loader, baseuri: string, loadingOptions: LoadingOptions): Promise<any>;
export declare function expandUrl(url: string, baseUrl: string, loadingOptions: LoadingOptions, scopedId?: boolean, vocabTerm?: boolean, scopedRef?: number): string;
