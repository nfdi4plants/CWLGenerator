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
exports.EnvVarRequirement = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#EnvVarRequirement
 *
 * Define a list of environment variables which will be set in the
 * execution environment of the tool.  See `EnvironmentDef` for details.
 *
 */
class EnvVarRequirement extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, class_, envDef }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.class_ = class_;
        this.envDef = envDef;
    }
    /**
     * Used to construct instances of {@link EnvVarRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link EnvVarRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let class_;
            try {
                class_ = yield (0, internal_1.loadField)(_doc.class, internal_1.LoaderInstances.uriEnvVarRequirement_classLoaderFalseTrueNone, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `class` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let envDef;
            try {
                envDef = yield (0, internal_1.loadField)(_doc.envDef, internal_1.LoaderInstances.idmapenvDefarrayOfEnvironmentDefLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `envDef` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!EnvVarRequirement.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`class\`,\`envDef\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'EnvVarRequirement'", __errors);
            }
            const schema = new EnvVarRequirement({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                class_: class_,
                envDef: envDef
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
        if (this.envDef != null) {
            r.envDef = (0, internal_1.save)(this.envDef, false, baseUrl, relativeUris);
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
exports.EnvVarRequirement = EnvVarRequirement;
EnvVarRequirement.attr = new Set(['class', 'envDef']);
//# sourceMappingURL=envVarRequirement.js.map