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
exports.EnvironmentDef = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#EnvironmentDef
 *
 * Define an environment variable that will be set in the runtime environment
 * by the workflow platform when executing the command line tool.  May be the
 * result of executing an expression, such as getting a parameter from input.
 *
 */
class EnvironmentDef extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, envName, envValue }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.envName = envName;
        this.envValue = envValue;
    }
    /**
     * Used to construct instances of {@link EnvironmentDef }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link EnvironmentDef }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let envName;
            try {
                envName = yield (0, internal_1.loadField)(_doc.envName, internal_1.LoaderInstances.strtype, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `envName` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let envValue;
            try {
                envValue = yield (0, internal_1.loadField)(_doc.envValue, internal_1.LoaderInstances.unionOfstrtypeOrExpressionLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `envValue` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!EnvironmentDef.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`envName\`,\`envValue\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'EnvironmentDef'", __errors);
            }
            const schema = new EnvironmentDef({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                envName: envName,
                envValue: envValue
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.envName != null) {
            r.envName = (0, internal_1.save)(this.envName, false, baseUrl, relativeUris);
        }
        if (this.envValue != null) {
            r.envValue = (0, internal_1.save)(this.envValue, false, baseUrl, relativeUris);
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
exports.EnvironmentDef = EnvironmentDef;
EnvironmentDef.attr = new Set(['envName', 'envValue']);
//# sourceMappingURL=environmentDef.js.map