import { Dictionary, LoadingOptions, Saveable } from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#SoftwarePackage
 */
export declare class SoftwarePackage extends Saveable {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * The name of the software to be made available. If the name is
     * common, inconsistent, or otherwise ambiguous it should be combined with
     * one or more identifiers in the `specs` field.
     *
     */
    package_: string;
    /**
     * The (optional) versions of the software that are known to be
     * compatible.
     *
     */
    version: undefined | Array<string>;
    /**
     * One or more [IRI](https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier)s
     * identifying resources for installing or enabling the software named in
     * the `package` field. Implementations may provide resolvers which map
     * these software identifer IRIs to some configuration action; or they can
     * use only the name from the `package` field on a best effort basis.
     *
     * For example, the IRI https://packages.debian.org/bowtie could
     * be resolved with `apt-get install bowtie`. The IRI
     * https://anaconda.org/bioconda/bowtie could be resolved with `conda
     * install -c bioconda bowtie`.
     *
     * IRIs can also be system independent and used to map to a specific
     * software installation or selection mechanism.
     * Using [RRID](https://www.identifiers.org/rrid/) as an example:
     * https://identifiers.org/rrid/RRID:SCR_005476
     * could be fulfilled using the above mentioned Debian or bioconda
     * package, a local installation managed by [Environment Modules](http://modules.sourceforge.net/),
     * or any other mechanism the platform chooses. IRIs can also be from
     * identifer sources that are discipline specific yet still system
     * independent. As an example, the equivalent [ELIXIR Tools and Data
     * Service Registry](https://bio.tools) IRI to the previous RRID example is
     * https://bio.tools/tool/bowtie2/version/2.2.8.
     * If supported by a given registry, implementations are encouraged to
     * query these system independent sofware identifier IRIs directly for
     * links to packaging systems.
     *
     * A site specific IRI can be listed as well. For example, an academic
     * computing cluster using Environment Modules could list the IRI
     * `https://hpc.example.edu/modules/bowtie-tbb/1.22` to indicate that
     * `module load bowtie-tbb/1.1.2` should be executed to make available
     * `bowtie` version 1.1.2 compiled with the TBB library prior to running
     * the accompanying Workflow or CommandLineTool. Note that the example IRI
     * is specific to a particular institution and computing environment as
     * the Environment Modules system does not have a common namespace or
     * standardized naming convention.
     *
     * This last example is the least portable and should only be used if
     * mechanisms based off of the `package` field or more generic IRIs are
     * unavailable or unsuitable. While harmless to other sites, site specific
     * software IRIs should be left out of shared CWL descriptions to avoid
     * clutter.
     *
     */
    specs: undefined | Array<string>;
    constructor({ extensionFields, loadingOptions, package_, version, specs }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        package_: string;
        version: undefined | Array<string>;
        specs: undefined | Array<string>;
    });
    /**
     * Used to construct instances of {@link SoftwarePackage }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link SoftwarePackage }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
