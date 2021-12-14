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
exports.InplaceUpdateRequirement = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InplaceUpdateRequirement
 *
 *
 * If `inplaceUpdate` is true, then an implementation supporting this
 * feature may permit tools to directly update files with `writable:
 * true` in InitialWorkDirRequirement.  That is, as an optimization,
 * files may be destructively modified in place as opposed to copied
 * and updated.
 *
 * An implementation must ensure that only one workflow step may
 * access a writable file at a time.  It is an error if a file which
 * is writable by one workflow step file is accessed (for reading or
 * writing) by any other workflow step running independently.
 * However, a file which has been updated in a previous completed
 * step may be used as input to multiple steps, provided it is
 * read-only in every step.
 *
 * Workflow steps which modify a file must produce the modified file
 * as output.  Downstream steps which futher process the file must
 * use the output of previous steps, and not refer to a common input
 * (this is necessary for both ordering and correctness).
 *
 * Workflow authors should provide this in the `hints` section.  The
 * intent of this feature is that workflows produce the same results
 * whether or not InplaceUpdateRequirement is supported by the
 * implementation, and this feature is primarily available as an
 * optimization for particular environments.
 *
 * Users and implementers should be aware that workflows that
 * destructively modify inputs may not be repeatable or reproducible.
 * In particular, enabling this feature implies that WorkReuse should
 * not be enabled.
 *
 */
class InplaceUpdateRequirement extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, class_, inplaceUpdate }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.class_ = class_;
        this.inplaceUpdate = inplaceUpdate;
    }
    /**
     * Used to construct instances of {@link InplaceUpdateRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link InplaceUpdateRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let class_;
            try {
                class_ = yield (0, internal_1.loadField)(_doc.class, internal_1.LoaderInstances.uriInplaceUpdateRequirement_classLoaderFalseTrueNone, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `class` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let inplaceUpdate;
            try {
                inplaceUpdate = yield (0, internal_1.loadField)(_doc.inplaceUpdate, internal_1.LoaderInstances.booltype, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `inplaceUpdate` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!InplaceUpdateRequirement.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`class\`,\`inplaceUpdate\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'InplaceUpdateRequirement'", __errors);
            }
            const schema = new InplaceUpdateRequirement({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                class_: class_,
                inplaceUpdate: inplaceUpdate
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
        if (this.inplaceUpdate != null) {
            r.inplaceUpdate = (0, internal_1.save)(this.inplaceUpdate, false, baseUrl, relativeUris);
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
exports.InplaceUpdateRequirement = InplaceUpdateRequirement;
InplaceUpdateRequirement.attr = new Set(['class', 'inplaceUpdate']);
//# sourceMappingURL=inplaceUpdateRequirement.js.map