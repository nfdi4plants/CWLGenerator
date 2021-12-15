import { Dictionary, LoadingOptions, Saveable } from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InputBinding
 */
export declare class InputBinding extends Saveable {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Use of `loadContents` in `InputBinding` is deprecated.
     * Preserved for v1.0 backwards compatability.  Will be removed in
     * CWL v2.0.  Use `InputParameter.loadContents` instead.
     *
     */
    loadContents?: undefined | boolean;
    constructor({ extensionFields, loadingOptions, loadContents }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        loadContents?: undefined | boolean;
    });
    /**
     * Used to construct instances of {@link InputBinding }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link InputBinding }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
