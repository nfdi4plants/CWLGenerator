import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/salad#ArraySchema
 */
export declare class ArraySchema extends Saveable {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Defines the type of the array elements.
     */
    items: string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Array<string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema>;
    /**
     * Must be `array`
     */
    type: string;
    constructor({ extensionFields, loadingOptions, items, type }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        items: string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Array<string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema>;
        type: string;
    });
    /**
     * Used to construct instances of {@link ArraySchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link ArraySchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
