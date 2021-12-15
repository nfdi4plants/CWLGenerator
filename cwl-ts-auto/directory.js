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
exports.Directory = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#Directory
 *
 * Represents a directory to present to a command line tool.
 *
 * Directories are represented as objects with `class` of `Directory`.  Directory objects have
 * a number of properties that provide metadata about the directory.
 *
 * The `location` property of a Directory is a URI that uniquely identifies
 * the directory.  Implementations must support the file:// URI scheme and may
 * support other schemes such as http://.  Alternately to `location`,
 * implementations must also accept the `path` property on Directory, which
 * must be a filesystem path available on the same host as the CWL runner (for
 * inputs) or the runtime environment of a command line tool execution (for
 * command line tool outputs).
 *
 * A Directory object may have a `listing` field.  This is a list of File and
 * Directory objects that are contained in the Directory.  For each entry in
 * `listing`, the `basename` property defines the name of the File or
 * Subdirectory when staged to disk.  If `listing` is not provided, the
 * implementation must have some way of fetching the Directory listing at
 * runtime based on the `location` field.
 *
 * If a Directory does not have `location`, it is a Directory literal.  A
 * Directory literal must provide `listing`.  Directory literals must be
 * created on disk at runtime as needed.
 *
 * The resources in a Directory literal do not need to have any implied
 * relationship in their `location`.  For example, a Directory listing may
 * contain two files located on different hosts.  It is the responsibility of
 * the runtime to ensure that those files are staged to disk appropriately.
 * Secondary files associated with files in `listing` must also be staged to
 * the same Directory.
 *
 * When executing a CommandLineTool, Directories must be recursively staged
 * first and have local values of `path` assigend.
 *
 * Directory objects in CommandLineTool output must provide either a
 * `location` URI or a `path` property in the context of the tool execution
 * runtime (local to the compute node, or within the executing container).
 *
 * An ExpressionTool may forward file references from input to output by using
 * the same value for `location`.
 *
 * Name conflicts (the same `basename` appearing multiple times in `listing`
 * or in any entry in `secondaryFiles` in the listing) is a fatal error.
 *
 */
class Directory extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, class_, location, path, basename, listing }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.class_ = class_;
        this.location = location;
        this.path = path;
        this.basename = basename;
        this.listing = listing;
    }
    /**
     * Used to construct instances of {@link Directory }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link Directory }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let class_;
            try {
                class_ = yield (0, internal_1.loadField)(_doc.class, internal_1.LoaderInstances.uriDirectory_classLoaderFalseTrueNone, baseuri, loadingOptions);
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
            let listing;
            if ('listing' in _doc) {
                try {
                    listing = yield (0, internal_1.loadField)(_doc.listing, internal_1.LoaderInstances.unionOfundefinedtypeOrarrayOfunionOfFileLoaderOrDirectoryLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `listing` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!Directory.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`class\`,\`location\`,\`path\`,\`basename\`,\`listing\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'Directory'", __errors);
            }
            const schema = new Directory({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                class_: class_,
                location: location,
                path: path,
                basename: basename,
                listing: listing
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
        if (this.listing != null) {
            r.listing = (0, internal_1.save)(this.listing, false, baseUrl, relativeUris);
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
exports.Directory = Directory;
Directory.attr = new Set(['class', 'location', 'path', 'basename', 'listing']);
//# sourceMappingURL=directory.js.map