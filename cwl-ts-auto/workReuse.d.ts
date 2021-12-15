import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkReuse
 *
 * For implementations that support reusing output from past work (on
 * the assumption that same code and same input produce same
 * results), control whether to enable or disable the reuse behavior
 * for a particular tool or step (to accomodate situations where that
 * assumption is incorrect).  A reused step is not executed but
 * instead returns the same output as the original execution.
 *
 * If `WorkReuse` is not specified, correct tools should assume it
 * is enabled by default.
 *
 */
export declare class WorkReuse extends Saveable implements Internal.ProcessRequirement {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Always 'WorkReuse'
     */
    class_: string;
    enableReuse: boolean | string;
    constructor({ extensionFields, loadingOptions, class_, enableReuse }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        class_: string;
        enableReuse: boolean | string;
    });
    /**
     * Used to construct instances of {@link WorkReuse }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link WorkReuse }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
