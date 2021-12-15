import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InitialWorkDirRequirement
 *
 * Define a list of files and subdirectories that must be staged by the workflow platform prior to executing the command line tool.
 * Normally files are staged within the designated output directory. However, when running inside containers, files may be staged at arbitrary locations, see discussion for `Dirent.entryname`. Together with `DockerRequirement.dockerOutputDirectory` this it possible to control the locations of both input and output files when running in containers.
 */
export declare class InitialWorkDirRequirement extends Saveable implements Internal.ProcessRequirement {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * InitialWorkDirRequirement
     */
    class_: string;
    /**
     * The list of files or subdirectories that must be staged prior
     * to executing the command line tool.
     *
     * Return type of each expression must validate as `["null",
     * File, Directory, Dirent, {type: array, items: [File,
     * Directory]}]`.
     *
     * Each `File` or `Directory` that is returned by an Expression
     * must be added to the designated output directory prior to
     * executing the tool.
     *
     * Each `Dirent` record that is listed or returned by an
     * expression specifies a file to be created or staged in the
     * designated output directory prior to executing the tool.
     *
     * Expressions may return null, in which case they have no effect.
     *
     * Files or Directories which are listed in the input parameters
     * and appear in the `InitialWorkDirRequirement` listing must
     * have their `path` set to their staged location.  If the same
     * File or Directory appears more than once in the
     * `InitialWorkDirRequirement` listing, the implementation must
     * choose exactly one value for `path`; how this value is chosen
     * is undefined.
     *
     */
    listing?: string | Array<undefined | Internal.Dirent | string | Internal.File | Internal.Directory | Array<Internal.File | Internal.Directory>>;
    constructor({ extensionFields, loadingOptions, class_, listing }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        class_: string;
        listing?: string | Array<undefined | Internal.Dirent | string | Internal.File | Internal.Directory | Array<Internal.File | Internal.Directory>>;
    });
    /**
     * Used to construct instances of {@link InitialWorkDirRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link InitialWorkDirRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
