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
exports.SecondaryFileSchema = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#SecondaryFileSchema
 *
 * Secondary files are specified using the following micro-DSL for secondary files:
 *
 * * If the value is a string, it is transformed to an object with two fields
 *   `pattern` and `required`
 * * By default, the value of `required` is `null`
 *   (this indicates default behavior, which may be based on the context)
 * * If the value ends with a question mark `?` the question mark is
 *   stripped off and the value of the field `required` is set to `False`
 * * The remaining value is assigned to the field `pattern`
 *
 * For implementation details and examples, please see
 * [this section](SchemaSalad.html#Domain_Specific_Language_for_secondary_files)
 * in the Schema Salad specification.
 *
 */
class SecondaryFileSchema extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, pattern, required }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.pattern = pattern;
        this.required = required;
    }
    /**
     * Used to construct instances of {@link SecondaryFileSchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link SecondaryFileSchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let pattern;
            try {
                pattern = yield (0, internal_1.loadField)(_doc.pattern, internal_1.LoaderInstances.unionOfstrtypeOrExpressionLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `pattern` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let required;
            if ('required' in _doc) {
                try {
                    required = yield (0, internal_1.loadField)(_doc.required, internal_1.LoaderInstances.unionOfundefinedtypeOrbooltypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `required` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!SecondaryFileSchema.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`pattern\`,\`required\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'SecondaryFileSchema'", __errors);
            }
            const schema = new SecondaryFileSchema({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                pattern: pattern,
                required: required
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.pattern != null) {
            r.pattern = (0, internal_1.save)(this.pattern, false, baseUrl, relativeUris);
        }
        if (this.required != null) {
            r.required = (0, internal_1.save)(this.required, false, baseUrl, relativeUris);
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
exports.SecondaryFileSchema = SecondaryFileSchema;
SecondaryFileSchema.attr = new Set(['pattern', 'required']);
//# sourceMappingURL=secondaryFileSchema.js.map