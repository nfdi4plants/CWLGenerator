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
exports.WorkflowStep = void 0;
const internal_1 = require("./util/internal");
const uuid_1 = require("uuid");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkflowStep
 *
 * A workflow step is an executable element of a workflow.  It specifies the
 * underlying process implementation (such as `CommandLineTool` or another
 * `Workflow`) in the `run` field and connects the input and output parameters
 * of the underlying process to workflow parameters.
 *
 * # Scatter/gather
 *
 * To use scatter/gather,
 * [ScatterFeatureRequirement](#ScatterFeatureRequirement) must be specified
 * in the workflow or workflow step requirements.
 *
 * A "scatter" operation specifies that the associated workflow step or
 * subworkflow should execute separately over a list of input elements.  Each
 * job making up a scatter operation is independent and may be executed
 * concurrently.
 *
 * The `scatter` field specifies one or more input parameters which will be
 * scattered.  An input parameter may be listed more than once.  The declared
 * type of each input parameter is implicitly becomes an array of items of the
 * input parameter type.  If a parameter is listed more than once, it becomes
 * a nested array.  As a result, upstream parameters which are connected to
 * scattered parameters must be arrays.
 *
 * All output parameter types are also implicitly wrapped in arrays.  Each job
 * in the scatter results in an entry in the output array.
 *
 * If any scattered parameter runtime value is an empty array, all outputs are
 * set to empty arrays and no work is done for the step, according to
 * applicable scattering rules.
 *
 * If `scatter` declares more than one input parameter, `scatterMethod`
 * describes how to decompose the input into a discrete set of jobs.
 *
 *   * **dotproduct** specifies that each of the input arrays are aligned and one
 *       element taken from each array to construct each job.  It is an error
 *       if all input arrays are not the same length.
 *
 *   * **nested_crossproduct** specifies the Cartesian product of the inputs,
 *       producing a job for every combination of the scattered inputs.  The
 *       output must be nested arrays for each level of scattering, in the
 *       order that the input arrays are listed in the `scatter` field.
 *
 *   * **flat_crossproduct** specifies the Cartesian product of the inputs,
 *       producing a job for every combination of the scattered inputs.  The
 *       output arrays must be flattened to a single level, but otherwise listed in the
 *       order that the input arrays are listed in the `scatter` field.
 *
 * # Conditional execution (Optional)
 *
 * Conditional execution makes execution of a step conditional on an
 * expression.  A step that is not executed is "skipped".  A skipped
 * step produces `null` for all output parameters.
 *
 * The condition is evaluated after `scatter`, using the input object
 * of each individual scatter job.  This means over a set of scatter
 * jobs, some may be executed and some may be skipped.  When the
 * results are gathered, skipped steps must be `null` in the output
 * arrays.
 *
 * The `when` field controls conditional execution.  This is an
 * expression that must be evaluated with `inputs` bound to the step
 * input object (or individual scatter job), and returns a boolean
 * value.  It is an error if this expression returns a value other
 * than `true` or `false`.
 *
 * Conditionals in CWL are an optional feature and are not required
 * to be implemented by all consumers of CWL documents.  An
 * implementation that does not support conditionals must return a
 * fatal error when attempting execute a workflow that uses
 * conditional constructs the implementation does not support.
 *
 * # Subworkflows
 *
 * To specify a nested workflow as part of a workflow step,
 * [SubworkflowFeatureRequirement](#SubworkflowFeatureRequirement) must be
 * specified in the workflow or workflow step requirements.
 *
 * It is a fatal error if a workflow directly or indirectly invokes itself as
 * a subworkflow (recursive workflows are not allowed).
 *
 */
class WorkflowStep extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, id, label, doc, in_, out, requirements, hints, run, when, scatter, scatterMethod }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.id = id;
        this.label = label;
        this.doc = doc;
        this.in_ = in_;
        this.out = out;
        this.requirements = requirements;
        this.hints = hints;
        this.run = run;
        this.when = when;
        this.scatter = scatter;
        this.scatterMethod = scatterMethod;
    }
    /**
     * Used to construct instances of {@link WorkflowStep }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link WorkflowStep }
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
            let doc;
            if ('doc' in _doc) {
                try {
                    doc = yield (0, internal_1.loadField)(_doc.doc, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtypeOrarrayOfstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `doc` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let in_;
            try {
                in_ = yield (0, internal_1.loadField)(_doc.in, internal_1.LoaderInstances.idmapin_arrayOfWorkflowStepInputLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `in` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let out;
            try {
                out = yield (0, internal_1.loadField)(_doc.out, internal_1.LoaderInstances.uriunionOfarrayOfunionOfstrtypeOrWorkflowStepOutputLoaderTrueFalseNone, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `out` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let requirements;
            if ('requirements' in _doc) {
                try {
                    requirements = yield (0, internal_1.loadField)(_doc.requirements, internal_1.LoaderInstances.idmaprequirementsunionOfundefinedtypeOrarrayOfunionOfInlineJavascriptRequirementLoaderOrSchemaDefRequirementLoaderOrLoadListingRequirementLoaderOrDockerRequirementLoaderOrSoftwareRequirementLoaderOrInitialWorkDirRequirementLoaderOrEnvVarRequirementLoaderOrShellCommandRequirementLoaderOrResourceRequirementLoaderOrWorkReuseLoaderOrNetworkAccessLoaderOrInplaceUpdateRequirementLoaderOrToolTimeLimitLoaderOrSubworkflowFeatureRequirementLoaderOrScatterFeatureRequirementLoaderOrMultipleInputFeatureRequirementLoaderOrStepInputExpressionRequirementLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `requirements` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let hints;
            if ('hints' in _doc) {
                try {
                    hints = yield (0, internal_1.loadField)(_doc.hints, internal_1.LoaderInstances.idmaphintsunionOfundefinedtypeOrarrayOfanyType, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `hints` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let run;
            try {
                run = yield (0, internal_1.loadField)(_doc.run, internal_1.LoaderInstances.unionOfstrtypeOrCommandLineToolLoaderOrExpressionToolLoaderOrWorkflowLoaderOrOperationLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `run` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let when;
            if ('when' in _doc) {
                try {
                    when = yield (0, internal_1.loadField)(_doc.when, internal_1.LoaderInstances.unionOfundefinedtypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `when` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let scatter;
            if ('scatter' in _doc) {
                try {
                    scatter = yield (0, internal_1.loadField)(_doc.scatter, internal_1.LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalse0, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `scatter` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let scatterMethod;
            if ('scatterMethod' in _doc) {
                try {
                    scatterMethod = yield (0, internal_1.loadField)(_doc.scatterMethod, internal_1.LoaderInstances.uriunionOfundefinedtypeOrScatterMethodLoaderFalseTrueNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `scatterMethod` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!WorkflowStep.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`id\`,\`label\`,\`doc\`,\`in\`,\`out\`,\`requirements\`,\`hints\`,\`run\`,\`when\`,\`scatter\`,\`scatterMethod\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'WorkflowStep'", __errors);
            }
            const schema = new WorkflowStep({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                id: id,
                label: label,
                doc: doc,
                in_: in_,
                out: out,
                requirements: requirements,
                hints: hints,
                run: run,
                when: when,
                scatter: scatter,
                scatterMethod: scatterMethod
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
        if (this.label != null) {
            r.label = (0, internal_1.save)(this.label, false, this.id, relativeUris);
        }
        if (this.doc != null) {
            r.doc = (0, internal_1.save)(this.doc, false, this.id, relativeUris);
        }
        if (this.in_ != null) {
            r.in = (0, internal_1.save)(this.in_, false, this.id, relativeUris);
        }
        if (this.out != null) {
            const u = (0, internal_1.saveRelativeUri)(this.out, this.id, true, relativeUris, undefined);
            if (u != null) {
                r.out = u;
            }
        }
        if (this.requirements != null) {
            r.requirements = (0, internal_1.save)(this.requirements, false, this.id, relativeUris);
        }
        if (this.hints != null) {
            r.hints = (0, internal_1.save)(this.hints, false, this.id, relativeUris);
        }
        if (this.run != null) {
            r.run = (0, internal_1.save)(this.run, false, this.id, relativeUris);
        }
        if (this.when != null) {
            r.when = (0, internal_1.save)(this.when, false, this.id, relativeUris);
        }
        if (this.scatter != null) {
            const u = (0, internal_1.saveRelativeUri)(this.scatter, this.id, false, relativeUris, 0);
            if (u != null) {
                r.scatter = u;
            }
        }
        if (this.scatterMethod != null) {
            const u = (0, internal_1.saveRelativeUri)(this.scatterMethod, this.id, false, relativeUris, undefined);
            if (u != null) {
                r.scatterMethod = u;
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
exports.WorkflowStep = WorkflowStep;
WorkflowStep.attr = new Set(['id', 'label', 'doc', 'in', 'out', 'requirements', 'hints', 'run', 'when', 'scatter', 'scatterMethod']);
//# sourceMappingURL=workflowStep.js.map