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
exports.SoftwarePackage = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#SoftwarePackage
 */
class SoftwarePackage extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, package_, version, specs }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.package_ = package_;
        this.version = version;
        this.specs = specs;
    }
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
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let package_;
            try {
                package_ = yield (0, internal_1.loadField)(_doc.package, internal_1.LoaderInstances.strtype, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `package` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let version;
            if ('version' in _doc) {
                try {
                    version = yield (0, internal_1.loadField)(_doc.version, internal_1.LoaderInstances.unionOfundefinedtypeOrarrayOfstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `version` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let specs;
            if ('specs' in _doc) {
                try {
                    specs = yield (0, internal_1.loadField)(_doc.specs, internal_1.LoaderInstances.uriunionOfundefinedtypeOrarrayOfstrtypeFalseFalseNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `specs` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!SoftwarePackage.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`package\`,\`version\`,\`specs\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'SoftwarePackage'", __errors);
            }
            const schema = new SoftwarePackage({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                package_: package_,
                version: version,
                specs: specs
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.package_ != null) {
            r.package = (0, internal_1.save)(this.package_, false, baseUrl, relativeUris);
        }
        if (this.version != null) {
            r.version = (0, internal_1.save)(this.version, false, baseUrl, relativeUris);
        }
        if (this.specs != null) {
            const u = (0, internal_1.saveRelativeUri)(this.specs, baseUrl, false, relativeUris, undefined);
            if (u != null) {
                r.specs = u;
            }
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
exports.SoftwarePackage = SoftwarePackage;
SoftwarePackage.attr = new Set(['package', 'version', 'specs']);
//# sourceMappingURL=softwarePackage.js.map