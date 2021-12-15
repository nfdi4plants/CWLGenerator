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
exports.File = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#File
 *
 * Represents a file (or group of files when `secondaryFiles` is provided) that
 * will be accessible by tools using standard POSIX file system call API such as
 * open(2) and read(2).
 *
 * Files are represented as objects with `class` of `File`.  File objects have
 * a number of properties that provide metadata about the file.
 *
 * The `location` property of a File is a URI that uniquely identifies the
 * file.  Implementations must support the file:// URI scheme and may support
 * other schemes such as http://.  The value of `location` may also be a
 * relative reference, in which case it must be resolved relative to the URI
 * of the document it appears in.  Alternately to `location`, implementations
 * must also accept the `path` property on File, which must be a filesystem
 * path available on the same host as the CWL runner (for inputs) or the
 * runtime environment of a command line tool execution (for command line tool
 * outputs).
 *
 * If no `location` or `path` is specified, a file object must specify
 * `contents` with the UTF-8 text content of the file.  This is a "file
 * literal".  File literals do not correspond to external resources, but are
 * created on disk with `contents` with when needed for a executing a tool.
 * Where appropriate, expressions can return file literals to define new files
 * on a runtime.  The maximum size of `contents` is 64 kilobytes.
 *
 * The `basename` property defines the filename on disk where the file is
 * staged.  This may differ from the resource name.  If not provided,
 * `basename` must be computed from the last path part of `location` and made
 * available to expressions.
 *
 * The `secondaryFiles` property is a list of File or Directory objects that
 * must be staged in the same directory as the primary file.  It is an error
 * for file names to be duplicated in `secondaryFiles`.
 *
 * The `size` property is the size in bytes of the File.  It must be computed
 * from the resource and made available to expressions.  The `checksum` field
 * contains a cryptographic hash of the file content for use it verifying file
 * contents.  Implementations may, at user option, enable or disable
 * computation of the `checksum` field for performance or other reasons.
 * However, the ability to compute output checksums is required to pass the
 * CWL conformance test suite.
 *
 * When executing a CommandLineTool, the files and secondary files may be
 * staged to an arbitrary directory, but must use the value of `basename` for
 * the filename.  The `path` property must be file path in the context of the
 * tool execution runtime (local to the compute node, or within the executing
 * container).  All computed properties should be available to expressions.
 * File literals also must be staged and `path` must be set.
 *
 * When collecting CommandLineTool outputs, `glob` matching returns file paths
 * (with the `path` property) and the derived properties. This can all be
 * modified by `outputEval`.  Alternately, if the file `cwl.output.json` is
 * present in the output, `outputBinding` is ignored.
 *
 * File objects in the output must provide either a `location` URI or a `path`
 * property in the context of the tool execution runtime (local to the compute
 * node, or within the executing container).
 *
 * When evaluating an ExpressionTool, file objects must be referenced via
 * `location` (the expression tool does not have access to files on disk so
 * `path` is meaningless) or as file literals.  It is legal to return a file
 * object with an existing `location` but a different `basename`.  The
 * `loadContents` field of ExpressionTool inputs behaves the same as on
 * CommandLineTool inputs, however it is not meaningful on the outputs.
 *
 * An ExpressionTool may forward file references from input to output by using
 * the same value for `location`.
 *
 */
class File extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, class_, location, path, basename, dirname, nameroot, nameext, checksum, size, secondaryFiles, format, contents }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.class_ = class_;
        this.location = location;
        this.path = path;
        this.basename = basename;
        this.dirname = dirname;
        this.nameroot = nameroot;
        this.nameext = nameext;
        this.checksum = checksum;
        this.size = size;
        this.secondaryFiles = secondaryFiles;
        this.format = format;
        this.contents = contents;
    }
    /**
     * Used to construct instances of {@link File }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link File }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let class_;
            try {
                class_ = yield (0, internal_1.loadField)(_doc.class, internal_1.LoaderInstances.uriFile_classLoaderFalseTrueNone, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `class` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let location;
            if ('location' in _doc) {
                try {
                    location = yield (0, internal_1.loadField)(_doc.location, internal_1.LoaderInstances.uriunionOfundefinedtypeOrstrtypeFalseFalseNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `location` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let path;
            if ('path' in _doc) {
                try {
                    path = yield (0, internal_1.loadField)(_doc.path, internal_1.LoaderInstances.uriunionOfundefinedtypeOrstrtypeFalseFalseNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `path` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let basename;
            if ('basename' in _doc) {
                try {
                    basename = yield (0, internal_1.loadField)(_doc.basename, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `basename` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let dirname;
            if ('dirname' in _doc) {
                try {
                    dirname = yield (0, internal_1.loadField)(_doc.dirname, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `dirname` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let nameroot;
            if ('nameroot' in _doc) {
                try {
                    nameroot = yield (0, internal_1.loadField)(_doc.nameroot, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `nameroot` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let nameext;
            if ('nameext' in _doc) {
                try {
                    nameext = yield (0, internal_1.loadField)(_doc.nameext, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `nameext` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let checksum;
            if ('checksum' in _doc) {
                try {
                    checksum = yield (0, internal_1.loadField)(_doc.checksum, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `checksum` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let size;
            if ('size' in _doc) {
                try {
                    size = yield (0, internal_1.loadField)(_doc.size, internal_1.LoaderInstances.unionOfundefinedtypeOrinttype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `size` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let secondaryFiles;
            if ('secondaryFiles' in _doc) {
                try {
                    secondaryFiles = yield (0, internal_1.loadField)(_doc.secondaryFiles, internal_1.LoaderInstances.secondaryfilesdslunionOfundefinedtypeOrarrayOfunionOfFileLoaderOrDirectoryLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `secondaryFiles` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let format;
            if ('format' in _doc) {
                try {
                    format = yield (0, internal_1.loadField)(_doc.format, internal_1.LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `format` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let contents;
            if ('contents' in _doc) {
                try {
                    contents = yield (0, internal_1.loadField)(_doc.contents, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `contents` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!File.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`class\`,\`location\`,\`path\`,\`basename\`,\`dirname\`,\`nameroot\`,\`nameext\`,\`checksum\`,\`size\`,\`secondaryFiles\`,\`format\`,\`contents\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'File'", __errors);
            }
            const schema = new File({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                class_: class_,
                location: location,
                path: path,
                basename: basename,
                dirname: dirname,
                nameroot: nameroot,
                nameext: nameext,
                checksum: checksum,
                size: size,
                secondaryFiles: secondaryFiles,
                format: format,
                contents: contents
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
        if (this.location != null) {
            const u = (0, internal_1.saveRelativeUri)(this.location, baseUrl, false, relativeUris, undefined);
            if (u != null) {
                r.location = u;
            }
        }
        if (this.path != null) {
            const u = (0, internal_1.saveRelativeUri)(this.path, baseUrl, false, relativeUris, undefined);
            if (u != null) {
                r.path = u;
            }
        }
        if (this.basename != null) {
            r.basename = (0, internal_1.save)(this.basename, false, baseUrl, relativeUris);
        }
        if (this.dirname != null) {
            r.dirname = (0, internal_1.save)(this.dirname, false, baseUrl, relativeUris);
        }
        if (this.nameroot != null) {
            r.nameroot = (0, internal_1.save)(this.nameroot, false, baseUrl, relativeUris);
        }
        if (this.nameext != null) {
            r.nameext = (0, internal_1.save)(this.nameext, false, baseUrl, relativeUris);
        }
        if (this.checksum != null) {
            r.checksum = (0, internal_1.save)(this.checksum, false, baseUrl, relativeUris);
        }
        if (this.size != null) {
            r.size = (0, internal_1.save)(this.size, false, baseUrl, relativeUris);
        }
        if (this.secondaryFiles != null) {
            r.secondaryFiles = (0, internal_1.save)(this.secondaryFiles, false, baseUrl, relativeUris);
        }
        if (this.format != null) {
            const u = (0, internal_1.saveRelativeUri)(this.format, baseUrl, true, relativeUris, undefined);
            if (u != null) {
                r.format = u;
            }
        }
        if (this.contents != null) {
            r.contents = (0, internal_1.save)(this.contents, false, baseUrl, relativeUris);
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
exports.File = File;
File.attr = new Set(['class', 'location', 'path', 'basename', 'dirname', 'nameroot', 'nameext', 'checksum', 'size', 'secondaryFiles', 'format', 'contents']);
//# sourceMappingURL=file.js.map