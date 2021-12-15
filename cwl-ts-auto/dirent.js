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
exports.Dirent = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#Dirent
 *
 * Define a file or subdirectory that must be staged to a particular
 * place prior to executing the command line tool.  May be the result
 * of executing an expression, such as building a configuration file
 * from a template.
 *
 * Usually files are staged within the [designated output directory](#Runtime_environment).
 * However, under certain circumstances, files may be staged at
 * arbitrary locations, see discussion for `entryname`.
 *
 */
class Dirent extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, entryname, entry, writable }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.entryname = entryname;
        this.entry = entry;
        this.writable = writable;
    }
    /**
     * Used to construct instances of {@link Dirent }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link Dirent }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let entryname;
            if ('entryname' in _doc) {
                try {
                    entryname = yield (0, internal_1.loadField)(_doc.entryname, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `entryname` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let entry;
            try {
                entry = yield (0, internal_1.loadField)(_doc.entry, internal_1.LoaderInstances.unionOfstrtypeOrExpressionLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `entry` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let writable;
            if ('writable' in _doc) {
                try {
                    writable = yield (0, internal_1.loadField)(_doc.writable, internal_1.LoaderInstances.unionOfundefinedtypeOrbooltype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `writable` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!Dirent.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`entryname\`,\`entry\`,\`writable\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'Dirent'", __errors);
            }
            const schema = new Dirent({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                entryname: entryname,
                entry: entry,
                writable: writable
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.entryname != null) {
            r.entryname = (0, internal_1.save)(this.entryname, false, baseUrl, relativeUris);
        }
        if (this.entry != null) {
            r.entry = (0, internal_1.save)(this.entry, false, baseUrl, relativeUris);
        }
        if (this.writable != null) {
            r.writable = (0, internal_1.save)(this.writable, false, baseUrl, relativeUris);
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
exports.Dirent = Dirent;
Dirent.attr = new Set(['entryname', 'entry', 'writable']);
//# sourceMappingURL=dirent.js.map