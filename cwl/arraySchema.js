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
exports.ArraySchema = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/salad#ArraySchema
 */
class ArraySchema extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, items, type }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.items = items;
        this.type = type;
    }
    /**
     * Used to construct instances of {@link ArraySchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link ArraySchema }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let items;
            try {
                items = yield (0, internal_1.loadField)(_doc.items, internal_1.LoaderInstances.typedslunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtypeOrarrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype2, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `items` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let type;
            try {
                type = yield (0, internal_1.loadField)(_doc.type, internal_1.LoaderInstances.typedslenum_d062602be0b4b8fd33e69e29a841317b6ab665bcLoader2, baseuri, loadingOptions);
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
                if (!ArraySchema.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`items\`,\`type\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'ArraySchema'", __errors);
            }
            const schema = new ArraySchema({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                items: items,
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
        if (this.items != null) {
            r.items = (0, internal_1.save)(this.items, false, baseUrl, relativeUris);
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
exports.ArraySchema = ArraySchema;
ArraySchema.attr = new Set(['items', 'type']);
//# sourceMappingURL=arraySchema.js.map