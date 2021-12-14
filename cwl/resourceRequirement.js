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
exports.ResourceRequirement = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#ResourceRequirement
 *
 * Specify basic hardware resource requirements.
 *
 * "min" is the minimum amount of a resource that must be reserved to
 * schedule a job. If "min" cannot be satisfied, the job should not
 * be run.
 *
 * "max" is the maximum amount of a resource that the job shall be
 * allocated. If a node has sufficient resources, multiple jobs may
 * be scheduled on a single node provided each job's "max" resource
 * requirements are met. If a job attempts to exceed its resource
 * allocation, an implementation may deny additional resources, which
 * may result in job failure.
 *
 * If both "min" and "max" are specified, an implementation may
 * choose to allocate any amount between "min" and "max", with the
 * actual allocation provided in the `runtime` object.
 *
 * If "min" is specified but "max" is not, then "max" == "min"
 * If "max" is specified by "min" is not, then "min" == "max".
 *
 * It is an error if max < min.
 *
 * It is an error if the value of any of these fields is negative.
 *
 * If neither "min" nor "max" is specified for a resource, use the default values below.
 *
 */
class ResourceRequirement extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, class_, coresMin, coresMax, ramMin, ramMax, tmpdirMin, tmpdirMax, outdirMin, outdirMax }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.class_ = class_;
        this.coresMin = coresMin;
        this.coresMax = coresMax;
        this.ramMin = ramMin;
        this.ramMax = ramMax;
        this.tmpdirMin = tmpdirMin;
        this.tmpdirMax = tmpdirMax;
        this.outdirMin = outdirMin;
        this.outdirMax = outdirMax;
    }
    /**
     * Used to construct instances of {@link ResourceRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link ResourceRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let class_;
            try {
                class_ = yield (0, internal_1.loadField)(_doc.class, internal_1.LoaderInstances.uriResourceRequirement_classLoaderFalseTrueNone, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `class` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let coresMin;
            if ('coresMin' in _doc) {
                try {
                    coresMin = yield (0, internal_1.loadField)(_doc.coresMin, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `coresMin` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let coresMax;
            if ('coresMax' in _doc) {
                try {
                    coresMax = yield (0, internal_1.loadField)(_doc.coresMax, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `coresMax` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let ramMin;
            if ('ramMin' in _doc) {
                try {
                    ramMin = yield (0, internal_1.loadField)(_doc.ramMin, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `ramMin` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let ramMax;
            if ('ramMax' in _doc) {
                try {
                    ramMax = yield (0, internal_1.loadField)(_doc.ramMax, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `ramMax` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let tmpdirMin;
            if ('tmpdirMin' in _doc) {
                try {
                    tmpdirMin = yield (0, internal_1.loadField)(_doc.tmpdirMin, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `tmpdirMin` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let tmpdirMax;
            if ('tmpdirMax' in _doc) {
                try {
                    tmpdirMax = yield (0, internal_1.loadField)(_doc.tmpdirMax, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `tmpdirMax` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let outdirMin;
            if ('outdirMin' in _doc) {
                try {
                    outdirMin = yield (0, internal_1.loadField)(_doc.outdirMin, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `outdirMin` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let outdirMax;
            if ('outdirMax' in _doc) {
                try {
                    outdirMax = yield (0, internal_1.loadField)(_doc.outdirMax, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrfloattypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `outdirMax` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!ResourceRequirement.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`class\`,\`coresMin\`,\`coresMax\`,\`ramMin\`,\`ramMax\`,\`tmpdirMin\`,\`tmpdirMax\`,\`outdirMin\`,\`outdirMax\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'ResourceRequirement'", __errors);
            }
            const schema = new ResourceRequirement({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                class_: class_,
                coresMin: coresMin,
                coresMax: coresMax,
                ramMin: ramMin,
                ramMax: ramMax,
                tmpdirMin: tmpdirMin,
                tmpdirMax: tmpdirMax,
                outdirMin: outdirMin,
                outdirMax: outdirMax
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
        if (this.coresMin != null) {
            r.coresMin = (0, internal_1.save)(this.coresMin, false, baseUrl, relativeUris);
        }
        if (this.coresMax != null) {
            r.coresMax = (0, internal_1.save)(this.coresMax, false, baseUrl, relativeUris);
        }
        if (this.ramMin != null) {
            r.ramMin = (0, internal_1.save)(this.ramMin, false, baseUrl, relativeUris);
        }
        if (this.ramMax != null) {
            r.ramMax = (0, internal_1.save)(this.ramMax, false, baseUrl, relativeUris);
        }
        if (this.tmpdirMin != null) {
            r.tmpdirMin = (0, internal_1.save)(this.tmpdirMin, false, baseUrl, relativeUris);
        }
        if (this.tmpdirMax != null) {
            r.tmpdirMax = (0, internal_1.save)(this.tmpdirMax, false, baseUrl, relativeUris);
        }
        if (this.outdirMin != null) {
            r.outdirMin = (0, internal_1.save)(this.outdirMin, false, baseUrl, relativeUris);
        }
        if (this.outdirMax != null) {
            r.outdirMax = (0, internal_1.save)(this.outdirMax, false, baseUrl, relativeUris);
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
exports.ResourceRequirement = ResourceRequirement;
ResourceRequirement.attr = new Set(['class', 'coresMin', 'coresMax', 'ramMin', 'ramMax', 'tmpdirMin', 'tmpdirMax', 'outdirMin', 'outdirMax']);
//# sourceMappingURL=resourceRequirement.js.map