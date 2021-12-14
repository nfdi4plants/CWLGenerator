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
exports.EnumSchema = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/salad#EnumSchema
 *
 * Define an enumerated type.
 *
 */
class EnumSchema extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, symbols, type }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.symbols = symbols;
        this.type = type;
    }
    /**
     * Used to construct instances of {@link EnumSchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link EnumSchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let symbols;
            try {
                symbols = yield (0, internal_1.loadField)(_doc.symbols, internal_1.LoaderInstances.uriarrayOfstrtypeTrueFalseNone, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `symbols` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let type;
            try {
                type = yield (0, internal_1.loadField)(_doc.type, internal_1.LoaderInstances.typedslenum_d961d79c225752b9fadb617367615ab176b47d77Loader2, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `type` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!EnumSchema.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`symbols\`,\`type\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'EnumSchema'", __errors);
            }
            const schema = new EnumSchema({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                symbols: symbols,
                type: type
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.symbols != null) {
            const u = (0, internal_1.saveRelativeUri)(this.symbols, baseUrl, true, relativeUris, undefined);
            if (u != null) {
                r.symbols = u;
            }
        }
        if (this.type != null) {
            r.type = (0, internal_1.save)(this.type, false, baseUrl, relativeUris);
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
exports.EnumSchema = EnumSchema;
EnumSchema.attr = new Set(['symbols', 'type']);
//# sourceMappingURL=enumSchema.js.map