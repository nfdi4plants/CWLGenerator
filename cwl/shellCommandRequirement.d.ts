import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#ShellCommandRequirement
 *
 * Modify the behavior of CommandLineTool to generate a single string
 * containing a shell command line.  Each item in the argument list must be
 * joined into a string separated by single spaces and quoted to prevent
 * intepretation by the shell, unless `CommandLineBinding` for that argument
 * contains `shellQuote: false`.  If `shellQuote: false` is specified, the
 * argument is joined into the command string without quoting, which allows
 * the use of shell metacharacters such as `|` for pipes.
 *
 */
export declare class ShellCommandRequirement extends Saveable implements Internal.ProcessRequirement {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Always 'ShellCommandRequirement'
     */
    class_: string;
    constructor({ extensionFields, loadingOptions, class_ }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        class_: string;
    });
    /**
     * Used to construct instances of {@link ShellCommandRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link ShellCommandRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
