import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandLineBindable
 */
export declare class CommandLineBindable extends Saveable {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Describes how to turn this object into command line arguments.
     */
    inputBinding: undefined | Internal.CommandLineBinding;
    constructor({ extensionFields, loadingOptions, inputBinding }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        inputBinding: undefined | Internal.CommandLineBinding;
    });
    /**
     * Used to construct instances of {@link CommandLineBindable }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link CommandLineBindable }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
