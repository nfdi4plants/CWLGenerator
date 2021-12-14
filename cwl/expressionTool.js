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
exports.ExpressionTool = void 0;
const internal_1 = require("./util/internal");
const uuid_1 = require("uuid");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#ExpressionTool
 *
 * An ExpressionTool is a type of Process object that can be run by itself
 * or as a Workflow step. It executes a pure Javascript expression that has
 * access to the same input parameters as a workflow. It is meant to be used
 * sparingly as a way to isolate complex Javascript expressions that need to
 * operate on input data and produce some result; perhaps just a
 * rearrangement of the inputs. No Docker software container is required
 * or allowed.
 *
 */
class ExpressionTool extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, id, class_, label, doc, inputs, outputs, requirements, hints, cwlVersion, intent, expression }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.id = id;
        this.class_ = class_;
        this.label = label;
        this.doc = doc;
        this.inputs = inputs;
        this.outputs = outputs;
        this.requirements = requirements;
        this.hints = hints;
        this.cwlVersion = cwlVersion;
        this.intent = intent;
        this.expression = expression;
    }
    /**
     * Used to construct instances of {@link ExpressionTool }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link ExpressionTool }
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
            let class_;
            try {
                class_ = yield (0, internal_1.loadField)(_doc.class, internal_1.LoaderInstances.uriExpressionTool_classLoaderFalseTrueNone, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `class` field is not valid because: ', [e]));
                }
                else {
                    throw e;
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
            let inputs;
            try {
                inputs = yield (0, internal_1.loadField)(_doc.inputs, internal_1.LoaderInstances.idmapinputsarrayOfWorkflowInputParameterLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `inputs` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            let outputs;
            try {
                outputs = yield (0, internal_1.loadField)(_doc.outputs, internal_1.LoaderInstances.idmapoutputsarrayOfExpressionToolOutputParameterLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `outputs` field is not valid because: ', [e]));
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
            let cwlVersion;
            if ('cwlVersion' in _doc) {
                try {
                    cwlVersion = yield (0, internal_1.loadField)(_doc.cwlVersion, internal_1.LoaderInstances.uriunionOfundefinedtypeOrCWLVersionLoaderFalseTrueNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `cwlVersion` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let intent;
            if ('intent' in _doc) {
                try {
                    intent = yield (0, internal_1.loadField)(_doc.intent, internal_1.LoaderInstances.uriunionOfundefinedtypeOrarrayOfstrtypeTrueFalseNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `intent` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let expression;
            try {
                expression = yield (0, internal_1.loadField)(_doc.expression, internal_1.LoaderInstances.ExpressionLoader, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `expression` field is not valid because: ', [e]));
                }
                else {
                    throw e;
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!ExpressionTool.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`id\`,\`label\`,\`doc\`,\`inputs\`,\`outputs\`,\`requirements\`,\`hints\`,\`cwlVersion\`,\`intent\`,\`class\`,\`expression\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'ExpressionTool'", __errors);
            }
            const schema = new ExpressionTool({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                id: id,
                label: label,
                doc: doc,
                inputs: inputs,
                outputs: outputs,
                requirements: requirements,
                hints: hints,
                cwlVersion: cwlVersion,
                intent: intent,
                class_: class_,
                expression: expression
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
        if (this.class_ != null) {
            const u = (0, internal_1.saveRelativeUri)(this.class_, this.id, false, relativeUris, undefined);
            if (u != null) {
                r.class = u;
            }
        }
        if (this.label != null) {
            r.label = (0, internal_1.save)(this.label, false, this.id, relativeUris);
        }
        if (this.doc != null) {
            r.doc = (0, internal_1.save)(this.doc, false, this.id, relativeUris);
        }
        if (this.inputs != null) {
            r.inputs = (0, internal_1.save)(this.inputs, false, this.id, relativeUris);
        }
        if (this.outputs != null) {
            r.outputs = (0, internal_1.save)(this.outputs, false, this.id, relativeUris);
        }
        if (this.requirements != null) {
            r.requirements = (0, internal_1.save)(this.requirements, false, this.id, relativeUris);
        }
        if (this.hints != null) {
            r.hints = (0, internal_1.save)(this.hints, false, this.id, relativeUris);
        }
        if (this.cwlVersion != null) {
            const u = (0, internal_1.saveRelativeUri)(this.cwlVersion, this.id, false, relativeUris, undefined);
            if (u != null) {
                r.cwlVersion = u;
            }
        }
        if (this.intent != null) {
            const u = (0, internal_1.saveRelativeUri)(this.intent, this.id, true, relativeUris, undefined);
            if (u != null) {
                r.intent = u;
            }
        }
        if (this.expression != null) {
            r.expression = (0, internal_1.save)(this.expression, false, this.id, relativeUris);
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
exports.ExpressionTool = ExpressionTool;
ExpressionTool.attr = new Set(['id', 'label', 'doc', 'inputs', 'outputs', 'requirements', 'hints', 'cwlVersion', 'intent', 'class', 'expression']);
//# sourceMappingURL=expressionTool.js.map