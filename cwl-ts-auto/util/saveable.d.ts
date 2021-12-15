import { LoadingOptions, Dictionary } from './internal';
export declare abstract class Saveable {
    static fromDoc(doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    abstract save(top: boolean, baseUrl: string, relativeUris: boolean): Dictionary<any>;
}
export declare function save(val: any, top?: boolean, baseUrl?: string, relativeUris?: boolean): any;
export declare function saveRelativeUri(uri: any, baseUrl: string | undefined, scopedId: boolean, relativeUris: boolean, refScope?: number): any;
export declare function prefixUrl(url: string, namespaces: Dictionary<string>): string;
