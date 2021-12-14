import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#ToolTimeLimit
 *
 * Set an upper limit on the execution time of a CommandLineTool.
 * A CommandLineTool whose execution duration exceeds the time
 * limit may be preemptively terminated and considered failed.
 * May also be used by batch systems to make scheduling decisions.
 * The execution duration excludes external operations, such as
 * staging of files, pulling a docker image etc, and only counts
 * wall-time for the execution of the command line itself.
 *
 */
export declare class ToolTimeLimit extends Saveable implements Internal.ProcessRequirement {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Always 'ToolTimeLimit'
     */
    class_: string;
    /**
     * The time limit, in seconds.  A time limit of zero means no
     * time limit.  Negative time limits are an error.
     *
     */
    timelimit: number | string;
    constructor({ extensionFields, loadingOptions, class_, timelimit }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        class_: string;
        timelimit: number | string;
    });
    /**
     * Used to construct instances of {@link ToolTimeLimit }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link ToolTimeLimit }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
