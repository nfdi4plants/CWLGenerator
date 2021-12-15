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
exports.WorkflowStepInput = void 0;
const internal_1 = require("./util/internal");
const uuid_1 = require("uuid");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkflowStepInput
 *
 * The input of a workflow step connects an upstream parameter (from the
 * workflow inputs, or the outputs of other workflows steps) with the input
 * parameters of the process specified by the `run` field. Only input parameters
 * declared by the target process will be passed through at runtime to the process
 * though additonal parameters may be specified (for use within `valueFrom`
 * expressions for instance) - unconnected or unused parameters do not represent an
 * error condition.
 *
 * # Input object
 *
 * A WorkflowStepInput object must contain an `id` field in the form
 * `#fieldname` or `#prefix/fieldname`.  When the `id` field contains a slash
 * `/` the field name consists of the characters following the final slash
 * (the prefix portion may contain one or more slashes to indicate scope).
 * This defines a field of the workflow step input object with the value of
 * the `source` parameter(s).
 *
 * # Merging multiple inbound data links
 *
 * To merge multiple inbound data links,
 * [MultipleInputFeatureRequirement](#MultipleInputFeatureRequirement) must be specified
 * in the workflow or workflow step requirements.
 *
 * If the sink parameter is an array, or named in a [workflow
 * scatter](#WorkflowStep) operation, there may be multiple inbound
 * data links listed in the `source` field.  The values from the
 * input links are merged depending on the method specified in the
 * `linkMerge` field.  If both `linkMerge` and `pickValue` are null
 * or not specified, and there is more than one element in the
 * `source` array, the default method is "merge_nested".
 *
 * If both `linkMerge` and `pickValue` are null or not specified, and
 * there is only a single element in the `source`, then the input
 * parameter takes the scalar value from the single input link (it is
 * *not* wrapped in a single-list).
 *
 * * **merge_nested**
 *
 *   The input must be an array consisting of exactly one entry for each
 *   input link.  If "merge_nested" is specified with a single link, the value
 *   from the link must be wrapped in a single-item list.
 *
 * * **merge_flattened**
 *
 *   1. The source and sink parameters must be compatible types, or the source
 *      type must be compatible with single element from the "items" type of
 *      the destination array parameter.
 *   2. Source parameters which are arrays are concatenated.
 *      Source parameters which are single element types are appended as
 *      single elements.
 *
 * # Picking non-null values among inbound data links
 *
 * If present, `pickValue` specifies how to picking non-null values among inbound data links.
 *
 * `pickValue` is evaluated
 *   1. Once all source values from upstream step or parameters are available.
 *   2. After `linkMerge`.
 *   3. Before `scatter` or `valueFrom`.
 *
 * This is specifically intended to be useful in combination with
 * [conditional execution](#WorkflowStep), where several upstream
 * steps may be connected to a single input (`source` is a list), and
 * skipped steps produce null values.
 *
 * Static type checkers should check for type consistency after infering what the type
 * will be after `pickValue` is applied, just as they do currently for `linkMerge`.
 *
 * * **first_non_null**
 *
 *   For the first level of a list input, pick the first non-null element.  The result is a scalar.
 *   It is an error if there is no non-null element.  Examples:
 *   * `[null, x, null, y] -> x`
 *   * `[null, [null], null, y] -> [null]`
 *   * `[null, null, null] -> Runtime Error`
 *
 *   *Intended use case*: If-else pattern where the
 *   value comes either from a conditional step or from a default or
 *   fallback value. The conditional step(s) should be placed first in
 *   the list.
 *
 * * **the_only_non_null**
 *
 *   For the first level of a list input, pick the single non-null element.  The result is a scalar.
 *   It is an error if there is more than one non-null element.  Examples:
 *
 *   * `[null, x, null] -> x`
 *   * `[null, x, null, y] -> Runtime Error`
 *   * `[null, [null], null] -> [null]`
 *   * `[null, null, null] -> Runtime Error`
 *
 *   *Intended use case*: Switch type patterns where developer considers
 *   more than one active code path as a workflow error
 *   (possibly indicating an error in writing `when` condition expressions).
 *
 * * **all_non_null**
 *
 *   For the first level of a list input, pick all non-null values.
 *   The result is a list, which may be empty.  Examples:
 *
 *   * `[null, x, null] -> [x]`
 *   * `[x, null, y] -> [x, y]`
 *   * `[null, [x], [null]] -> [[x], [null]]`
 *   * `[null, null, null] -> []`
 *
 *   *Intended use case*: It is valid to have more than one source, but
 *    sources are conditional, so null sources (from skipped steps)
 *    should be filtered out.
 *
 */
class WorkflowStepInput extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, id, source, linkMerge, pickValue, loadContents, loadListing, label, default_, valueFrom }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.id = id;
        this.source = source;
        this.linkMerge = linkMerge;
        this.pickValue = pickValue;
        this.loadContents = loadContents;
        this.loadListing = loadListing;
        this.label = label;
        this.default_ = default_;
        this.valueFrom = valueFrom;
    }
    /**
     * Used to construct instances of {@link WorkflowStepInput }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link WorkflowStepInput }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let id;
            if ('id' in _doc) {
                try {
                    id = yield (0, internal_1.loadField)(_doc.id, internal_1.LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `id` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const originalidIsUndefined = (id === undefined);
            if (originalidIsUndefined) {
                if (docRoot != null) {
                    id = docRoot;
                }
                else {
                    id = "_" + (0, uuid_1.v4)();
                }
            }
            else {
                baseuri = id;
            }
            let source;
            if ('source' in _doc) {
                try {
                    source = yield (0, internal_1.loadField)(_doc.source, internal_1.LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalse2, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `source` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let linkMerge;
            if ('linkMerge' in _doc) {
                try {
                    linkMerge = yield (0, internal_1.loadField)(_doc.linkMerge, internal_1.LoaderInstances.unionOfundefinedtypeOrLinkMergeMethodLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `linkMerge` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let pickValue;
            if ('pickValue' in _doc) {
                try {
                    pickValue = yield (0, internal_1.loadField)(_doc.pickValue, internal_1.LoaderInstances.unionOfundefinedtypeOrPickValueMethodLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `pickValue` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let loadContents;
            if ('loadContents' in _doc) {
                try {
                    loadContents = yield (0, internal_1.loadField)(_doc.loadContents, internal_1.LoaderInstances.unionOfundefinedtypeOrbooltype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `loadContents` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let loadListing;
            if ('loadListing' in _doc) {
                try {
                    loadListing = yield (0, internal_1.loadField)(_doc.loadListing, internal_1.LoaderInstances.unionOfundefinedtypeOrLoadListingEnumLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `loadListing` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let label;
            if ('label' in _doc) {
                try {
                    label = yield (0, internal_1.loadField)(_doc.label, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `label` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let default_;
            if ('default' in _doc) {
                try {
                    default_ = yield (0, internal_1.loadField)(_doc.default, internal_1.LoaderInstances.unionOfundefinedtypeOranyType, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `default` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let valueFrom;
            if ('valueFrom' in _doc) {
                try {
                    valueFrom = yield (0, internal_1.loadField)(_doc.valueFrom, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `valueFrom` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!WorkflowStepInput.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`id\`,\`source\`,\`linkMerge\`,\`pickValue\`,\`loadContents\`,\`loadListing\`,\`label\`,\`default\`,\`valueFrom\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'WorkflowStepInput'", __errors);
            }
            const schema = new WorkflowStepInput({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                id: id,
                source: source,
                linkMerge: linkMerge,
                pickValue: pickValue,
                loadContents: loadContents,
                loadListing: loadListing,
                label: label,
                default_: default_,
                valueFrom: valueFrom
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.id != null) {
            const u = (0, internal_1.saveRelativeUri)(this.id, baseUrl, true, relativeUris, undefined);
            if (u != null) {
                r.id = u;
            }
        }
        if (this.source != null) {
            const u = (0, internal_1.saveRelativeUri)(this.source, this.id, false, relativeUris, 2);
            if (u != null) {
                r.source = u;
            }
        }
        if (this.linkMerge != null) {
            r.linkMerge = (0, internal_1.save)(this.linkMerge, false, this.id, relativeUris);
        }
        if (this.pickValue != null) {
            r.pickValue = (0, internal_1.save)(this.pickValue, false, this.id, relativeUris);
        }
        if (this.loadContents != null) {
            r.loadContents = (0, internal_1.save)(this.loadContents, false, this.id, relativeUris);
        }
        if (this.loadListing != null) {
            r.loadListing = (0, internal_1.save)(this.loadListing, false, this.id, relativeUris);
        }
        if (this.label != null) {
            r.label = (0, internal_1.save)(this.label, false, this.id, relativeUris);
        }
        if (this.default_ != null) {
            r.default = (0, internal_1.save)(this.default_, false, this.id, relativeUris);
        }
        if (this.valueFrom != null) {
            r.valueFrom = (0, internal_1.save)(this.valueFrom, false, this.id, relativeUris);
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
exports.WorkflowStepInput = WorkflowStepInput;
WorkflowStepInput.attr = new Set(['id', 'source', 'linkMerge', 'pickValue', 'loadContents', 'loadListing', 'label', 'default', 'valueFrom']);
//# sourceMappingURL=workflowStepInput.js.map