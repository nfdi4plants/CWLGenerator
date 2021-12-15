import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#OutputArraySchema
 */
export declare class OutputArraySchema extends Saveable implements Internal.ArraySchema, Internal.OutputSchema {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * The identifier for this type
     */
    name?: undefined | string;
    /**
     * Defines the type of the array elements.
     */
    items: string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | Array<string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema>;
    /**
     * Must be `array`
     */
    type: string;
    /**
     * A short, human-readable label of this object.
     */
    label?: undefined | string;
    /**
     * A documentation string for this object, or an array of strings which should be concatenated.
     */
    doc?: undefined | string | Array<string>;
    constructor({ extensionFields, loadingOptions, name, items, type, label, doc }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        items: string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | Array<string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema>;
        type: string;
        label?: undefined | string;
        doc?: undefined | string | Array<string>;
        name?: undefined | string;
    });
    /**
     * Used to construct instances of {@link OutputArraySchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link OutputArraySchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
