import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InputRecordSchema
 */
export declare class InputRecordSchema extends Saveable implements Internal.RecordSchema, Internal.InputSchema {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * The identifier for this type
     */
    name?: undefined | string;
    /**
     * Defines the fields of the record.
     */
    fields?: undefined | Array<Internal.InputRecordField>;
    /**
     * Must be `record`
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
    constructor({ extensionFields, loadingOptions, name, fields, type, label, doc }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        fields?: undefined | Array<Internal.InputRecordField>;
        type: string;
        label?: undefined | string;
        doc?: undefined | string | Array<string>;
        name?: undefined | string;
    });
    /**
     * Used to construct instances of {@link InputRecordSchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link InputRecordSchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
