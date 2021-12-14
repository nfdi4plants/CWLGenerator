import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#SubworkflowFeatureRequirement
 *
 * Indicates that the workflow platform must support nested workflows in
 * the `run` field of [WorkflowStep](#WorkflowStep).
 *
 */
export declare class SubworkflowFeatureRequirement extends Saveable implements Internal.ProcessRequirement {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Always 'SubworkflowFeatureRequirement'
     */
    class_: string;
    constructor({ extensionFields, loadingOptions, class_ }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        class_: string;
    });
    /**
     * Used to construct instances of {@link SubworkflowFeatureRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link SubworkflowFeatureRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
