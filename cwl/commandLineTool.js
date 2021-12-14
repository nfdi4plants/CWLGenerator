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
exports.CommandLineTool = void 0;
const internal_1 = require("./util/internal");
const uuid_1 = require("uuid");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandLineTool
 *
 * This defines the schema of the CWL Command Line Tool Description document.
 *
 */
class CommandLineTool extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, id, class_, label, doc, inputs, outputs, requirements, hints, cwlVersion, intent, baseCommand, arguments_, stdin, stderr, stdout, successCodes, temporaryFailCodes, permanentFailCodes }) {
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
        this.baseCommand = baseCommand;
        this.arguments_ = arguments_;
        this.stdin = stdin;
        this.stderr = stderr;
        this.stdout = stdout;
        this.successCodes = successCodes;
        this.temporaryFailCodes = temporaryFailCodes;
        this.permanentFailCodes = permanentFailCodes;
    }
    /**
     * Used to construct instances of {@link CommandLineTool }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link CommandLineTool }
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
                class_ = yield (0, internal_1.loadField)(_doc.class, internal_1.LoaderInstances.uriCommandLineTool_classLoaderFalseTrueNone, baseuri, loadingOptions);
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
                inputs = yield (0, internal_1.loadField)(_doc.inputs, internal_1.LoaderInstances.idmapinputsarrayOfCommandInputParameterLoader, baseuri, loadingOptions);
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
                outputs = yield (0, internal_1.loadField)(_doc.outputs, internal_1.LoaderInstances.idmapoutputsarrayOfCommandOutputParameterLoader, baseuri, loadingOptions);
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
            let baseCommand;
            if ('baseCommand' in _doc) {
                try {
                    baseCommand = yield (0, internal_1.loadField)(_doc.baseCommand, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtypeOrarrayOfstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `baseCommand` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let arguments_;
            if ('arguments' in _doc) {
                try {
                    arguments_ = yield (0, internal_1.loadField)(_doc.arguments, internal_1.LoaderInstances.unionOfundefinedtypeOrarrayOfunionOfstrtypeOrExpressionLoaderOrCommandLineBindingLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `arguments` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let stdin;
            if ('stdin' in _doc) {
                try {
                    stdin = yield (0, internal_1.loadField)(_doc.stdin, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `stdin` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let stderr;
            if ('stderr' in _doc) {
                try {
                    stderr = yield (0, internal_1.loadField)(_doc.stderr, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `stderr` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let stdout;
            if ('stdout' in _doc) {
                try {
                    stdout = yield (0, internal_1.loadField)(_doc.stdout, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `stdout` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let successCodes;
            if ('successCodes' in _doc) {
                try {
                    successCodes = yield (0, internal_1.loadField)(_doc.successCodes, internal_1.LoaderInstances.unionOfundefinedtypeOrarrayOfinttype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `successCodes` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let temporaryFailCodes;
            if ('temporaryFailCodes' in _doc) {
                try {
                    temporaryFailCodes = yield (0, internal_1.loadField)(_doc.temporaryFailCodes, internal_1.LoaderInstances.unionOfundefinedtypeOrarrayOfinttype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `temporaryFailCodes` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let permanentFailCodes;
            if ('permanentFailCodes' in _doc) {
                try {
                    permanentFailCodes = yield (0, internal_1.loadField)(_doc.permanentFailCodes, internal_1.LoaderInstances.unionOfundefinedtypeOrarrayOfinttype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `permanentFailCodes` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!CommandLineTool.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`id\`,\`label\`,\`doc\`,\`inputs\`,\`outputs\`,\`requirements\`,\`hints\`,\`cwlVersion\`,\`intent\`,\`class\`,\`baseCommand\`,\`arguments\`,\`stdin\`,\`stderr\`,\`stdout\`,\`successCodes\`,\`temporaryFailCodes\`,\`permanentFailCodes\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'CommandLineTool'", __errors);
            }
            const schema = new CommandLineTool({
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
                baseCommand: baseCommand,
                arguments_: arguments_,
                stdin: stdin,
                stderr: stderr,
                stdout: stdout,
                successCodes: successCodes,
                temporaryFailCodes: temporaryFailCodes,
                permanentFailCodes: permanentFailCodes
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
        if (this.baseCommand != null) {
            r.baseCommand = (0, internal_1.save)(this.baseCommand, false, this.id, relativeUris);
        }
        if (this.arguments_ != null) {
            r.arguments = (0, internal_1.save)(this.arguments_, false, this.id, relativeUris);
        }
        if (this.stdin != null) {
            r.stdin = (0, internal_1.save)(this.stdin, false, this.id, relativeUris);
        }
        if (this.stderr != null) {
            r.stderr = (0, internal_1.save)(this.stderr, false, this.id, relativeUris);
        }
        if (this.stdout != null) {
            r.stdout = (0, internal_1.save)(this.stdout, false, this.id, relativeUris);
        }
        if (this.successCodes != null) {
            r.successCodes = (0, internal_1.save)(this.successCodes, false, this.id, relativeUris);
        }
        if (this.temporaryFailCodes != null) {
            r.temporaryFailCodes = (0, internal_1.save)(this.temporaryFailCodes, false, this.id, relativeUris);
        }
        if (this.permanentFailCodes != null) {
            r.permanentFailCodes = (0, internal_1.save)(this.permanentFailCodes, false, this.id, relativeUris);
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
exports.CommandLineTool = CommandLineTool;
CommandLineTool.attr = new Set(['id', 'label', 'doc', 'inputs', 'outputs', 'requirements', 'hints', 'cwlVersion', 'intent', 'class', 'baseCommand', 'arguments', 'stdin', 'stderr', 'stdout', 'successCodes', 'temporaryFailCodes', 'permanentFailCodes']);
//# sourceMappingURL=commandLineTool.js.map