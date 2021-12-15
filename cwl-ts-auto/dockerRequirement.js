"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerRequirement = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#DockerRequirement
 *
 * Indicates that a workflow component should be run in a
 * [Docker](http://docker.com) or Docker-compatible (such as
 * [Singularity](https://www.sylabs.io/) and [udocker](https://github.com/indigo-dc/udocker)) container environment and
 * specifies how to fetch or build the image.
 *
 * If a CommandLineTool lists `DockerRequirement` under
 * `hints` (or `requirements`), it may (or must) be run in the specified Docker
 * container.
 *
 * The platform must first acquire or install the correct Docker image as
 * specified by `dockerPull`, `dockerImport`, `dockerLoad` or `dockerFile`.
 *
 * The platform must execute the tool in the container using `docker run` with
 * the appropriate Docker image and tool command line.
 *
 * The workflow platform may provide input files and the designated output
 * directory through the use of volume bind mounts.  The platform should rewrite
 * file paths in the input object to correspond to the Docker bind mounted
 * locations. That is, the platform should rewrite values in the parameter context
 * such as `runtime.outdir`, `runtime.tmpdir` and others to be valid paths
 * within the container. The platform must ensure that `runtime.outdir` and
 * `runtime.tmpdir` are distinct directories.
 *
 * When running a tool contained in Docker, the workflow platform must not
 * assume anything about the contents of the Docker container, such as the
 * presence or absence of specific software, except to assume that the
 * generated command line represents a valid command within the runtime
 * environment of the container.
 *
 * A container image may specify an
 * [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint)
 * and/or
 * [CMD](https://docs.docker.com/engine/reference/builder/#cmd).
 * Command line arguments will be appended after all elements of
 * ENTRYPOINT, and will override all elements specified using CMD (in
 * other words, CMD is only used when the CommandLineTool definition
 * produces an empty command line).
 *
 * Use of implicit ENTRYPOINT or CMD are discouraged due to reproducibility
 * concerns of the implicit hidden execution point (For further discussion, see
 * [https://doi.org/10.12688/f1000research.15140.1](https://doi.org/10.12688/f1000research.15140.1)). Portable
 * CommandLineTool wrappers in which use of a container is optional must not rely on ENTRYPOINT or CMD.
 * CommandLineTools which do rely on ENTRYPOINT or CMD must list `DockerRequirement` in the
 * `requirements` section.
 *
 * ## Interaction with other requirements
 *
 * If [EnvVarRequirement](#EnvVarRequirement) is specified alongside a
 * DockerRequirement, the environment variables must be provided to Docker
 * using `--env` or `--env-file` and interact with the container's preexisting
 * environment as defined by Docker.
 *
 */
class DockerRequirement extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, class_, dockerPull, dockerLoad, dockerFile, dockerImport, dockerImageId, dockerOutputDirectory }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.class_ = class_;
        this.dockerPull = dockerPull;
        this.dockerLoad = dockerLoad;
        this.dockerFile = dockerFile;
        this.dockerImport = dockerImport;
        this.dockerImageId = dockerImageId;
        this.dockerOutputDirectory = dockerOutputDirectory;
    }
    /**
     * Used to construct instances of {@link DockerRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link DockerRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let class_;
            try {
                class_ = yield (0, internal_1.loadField)(_doc.class, internal_1.LoaderInstances.uriDockerRequirement_classLoaderFalseTrueNone, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `class` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let dockerPull;
            if ('dockerPull' in _doc) {
                try {
                    dockerPull = yield (0, internal_1.loadField)(_doc.dockerPull, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `dockerPull` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let dockerLoad;
            if ('dockerLoad' in _doc) {
                try {
                    dockerLoad = yield (0, internal_1.loadField)(_doc.dockerLoad, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `dockerLoad` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let dockerFile;
            if ('dockerFile' in _doc) {
                try {
                    dockerFile = yield (0, internal_1.loadField)(_doc.dockerFile, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `dockerFile` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let dockerImport;
            if ('dockerImport' in _doc) {
                try {
                    dockerImport = yield (0, internal_1.loadField)(_doc.dockerImport, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `dockerImport` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let dockerImageId;
            if ('dockerImageId' in _doc) {
                try {
                    dockerImageId = yield (0, internal_1.loadField)(_doc.dockerImageId, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `dockerImageId` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let dockerOutputDirectory;
            if ('dockerOutputDirectory' in _doc) {
                try {
                    dockerOutputDirectory = yield (0, internal_1.loadField)(_doc.dockerOutputDirectory, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `dockerOutputDirectory` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!DockerRequirement.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`class\`,\`dockerPull\`,\`dockerLoad\`,\`dockerFile\`,\`dockerImport\`,\`dockerImageId\`,\`dockerOutputDirectory\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'DockerRequirement'", __errors);
            }
            const schema = new DockerRequirement({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                class_: class_,
                dockerPull: dockerPull,
                dockerLoad: dockerLoad,
                dockerFile: dockerFile,
                dockerImport: dockerImport,
                dockerImageId: dockerImageId,
                dockerOutputDirectory: dockerOutputDirectory
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.class_ != null) {
            const u = (0, internal_1.saveRelativeUri)(this.class_, baseUrl, false, relativeUris, undefined);
            if (u != null) {
                r.class = u;
            }
        }
        if (this.dockerPull != null) {
            r.dockerPull = (0, internal_1.save)(this.dockerPull, false, baseUrl, relativeUris);
        }
        if (this.dockerLoad != null) {
            r.dockerLoad = (0, internal_1.save)(this.dockerLoad, false, baseUrl, relativeUris);
        }
        if (this.dockerFile != null) {
            r.dockerFile = (0, internal_1.save)(this.dockerFile, false, baseUrl, relativeUris);
        }
        if (this.dockerImport != null) {
            r.dockerImport = (0, internal_1.save)(this.dockerImport, false, baseUrl, relativeUris);
        }
        if (this.dockerImageId != null) {
            r.dockerImageId = (0, internal_1.save)(this.dockerImageId, false, baseUrl, relativeUris);
        }
        if (this.dockerOutputDirectory != null) {
            r.dockerOutputDirectory = (0, internal_1.save)(this.dockerOutputDirectory, false, baseUrl, relativeUris);
        }
        if (top) {
            if (this.loadingOptions.namespaces != null) {
                r.$namespaces = this.loadingOptions.namespaces;
            }
            if (this.loadingOptions.schemas != null) {
                r.$schemas = this.loadingOptions.schemas;
            }
        }
        return r;
    }
}
exports.DockerRequirement = DockerRequirement;
DockerRequirement.attr = new Set(['class', 'dockerPull', 'dockerLoad', 'dockerFile', 'dockerImport', 'dockerImageId', 'dockerOutputDirectory']);
//# sourceMappingURL=dockerRequirement.js.map