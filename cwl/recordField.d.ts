import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/salad#RecordField
 *
 * A field of a record.
 */
export declare class RecordField extends Saveable implements Internal.Documented {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * The name of the field
     *
     */
    name: string;
    /**
     * A documentation string for this object, or an array of strings which should be concatenated.
     */
    doc: undefined | string | Array<string>;
    /**
     * The field type
     *
     */
    type: string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Array<string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema>;
    constructor({ extensionFields, loadingOptions, name, doc, type }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        doc: undefined | string | Array<string>;
        name: string;
        type: string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | Array<string | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema>;
    });
    /**
     * Used to construct instances of {@link RecordField }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link RecordField }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
