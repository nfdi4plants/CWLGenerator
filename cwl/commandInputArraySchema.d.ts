import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandInputArraySchema
 */
export declare class CommandInputArraySchema extends Saveable implements Internal.InputArraySchema, Internal.CommandInputSchema, Internal.CommandLineBindable {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * The identifier for this type
     */
    name: undefined | string;
    /**
     * Defines the type of the array elements.
     */
    items: string | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | Array<string | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema>;
    /**
     * Must be `array`
     */
    type: string;
    /**
     * A short, human-readable label of this object.
     */
    label: undefined | string;
    /**
     * A documentation string for this object, or an array of strings which should be concatenated.
     */
    doc: undefined | string | Array<string>;
    /**
     * Describes how to turn this object into command line arguments.
     */
    inputBinding: undefined | Internal.CommandLineBinding;
    constructor({ extensionFields, loadingOptions, name, items, type, label, doc, inputBinding }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        items: string | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema | Array<string | Internal.CommandInputRecordSchema | Internal.CommandInputEnumSchema | Internal.CommandInputArraySchema>;
        type: string;
        label: undefined | string;
        doc: undefined | string | Array<string>;
        name: undefined | string;
        inputBinding: undefined | Internal.CommandLineBinding;
    });
    /**
     * Used to construct instances of {@link CommandInputArraySchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link CommandInputArraySchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
