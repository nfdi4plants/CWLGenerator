import { Dictionary, LoadingOptions, Saveable } from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/salad#EnumSchema
 *
 * Define an enumerated type.
 *
 */
export declare class EnumSchema extends Saveable {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Defines the set of valid symbols.
     */
    symbols: Array<string>;
    /**
     * Must be `enum`
     */
    type: string;
    constructor({ extensionFields, loadingOptions, symbols, type }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        symbols: Array<string>;
        type: string;
    });
    /**
     * Used to construct instances of {@link EnumSchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link EnumSchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
