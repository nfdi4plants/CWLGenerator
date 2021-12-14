import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/salad#RecordSchema
 */
export declare class RecordSchema extends Saveable {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Defines the fields of the record.
     */
    fields: undefined | Array<Internal.RecordField>;
    /**
     * Must be `record`
     */
    type: string;
    constructor({ extensionFields, loadingOptions, fields, type }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        fields: undefined | Array<Internal.RecordField>;
        type: string;
    });
    /**
     * Used to construct instances of {@link RecordSchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link RecordSchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
