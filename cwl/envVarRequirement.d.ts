import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#EnvVarRequirement
 *
 * Define a list of environment variables which will be set in the
 * execution environment of the tool.  See `EnvironmentDef` for details.
 *
 */
export declare class EnvVarRequirement extends Saveable implements Internal.ProcessRequirement {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Always 'EnvVarRequirement'
     */
    class_: string;
    /**
     * The list of environment variables.
     */
    envDef: Array<Internal.EnvironmentDef>;
    constructor({ extensionFields, loadingOptions, class_, envDef }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        class_: string;
        envDef: Array<Internal.EnvironmentDef>;
    });
    /**
     * Used to construct instances of {@link EnvVarRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link EnvVarRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
