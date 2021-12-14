import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkflowStepOutput
 *
 * Associate an output parameter of the underlying process with a workflow
 * parameter.  The workflow parameter (given in the `id` field) be may be used
 * as a `source` to connect with input parameters of other workflow steps, or
 * with an output parameter of the process.
 *
 * A unique identifier for this workflow output parameter.  This is
 * the identifier to use in the `source` field of `WorkflowStepInput`
 * to connect the output value to downstream parameters.
 *
 */
export declare class WorkflowStepOutput extends Saveable implements Internal.Identified {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * The unique identifier for this object.
     */
    id: undefined | string;
    constructor({ extensionFields, loadingOptions, id }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        id: undefined | string;
    });
    /**
     * Used to construct instances of {@link WorkflowStepOutput }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link WorkflowStepOutput }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
