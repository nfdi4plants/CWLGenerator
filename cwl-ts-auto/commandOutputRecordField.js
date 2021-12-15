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
exports.CommandOutputRecordField = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandOutputRecordField
 */
class CommandOutputRecordField extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, name, doc, type, label, secondaryFiles, streamable, format, outputBinding }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.name = name;
        this.doc = doc;
        this.type = type;
        this.label = label;
        this.secondaryFiles = secondaryFiles;
        this.streamable = streamable;
        this.format = format;
        this.outputBinding = outputBinding;
    }
    /**
     * Used to construct instances of {@link CommandOutputRecordField }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link CommandOutputRecordField }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
            let name;
            if ('name' in _doc) {
                try {
                    name = yield (0, internal_1.loadField)(_doc.name, internal_1.LoaderInstances.uristrtypeTrueFalseNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `name` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const originalnameIsUndefined = (name === undefined);
            if (originalnameIsUndefined) {
                if (docRoot != null) {
                    name = docRoot;
                }
                else {
                    throw new internal_1.ValidationException("Missing name");
                }
            }
            else {
                baseuri = name;
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
            let type;
            try {
                type = yield (0, internal_1.loadField)(_doc.type, internal_1.LoaderInstances.typedslunionOfCWLTypeLoaderOrCommandOutputRecordSchemaLoaderOrCommandOutputEnumSchemaLoaderOrCommandOutputArraySchemaLoaderOrstrtypeOrarrayOfunionOfCWLTypeLoaderOrCommandOutputRecordSchemaLoaderOrCommandOutputEnumSchemaLoaderOrCommandOutputArraySchemaLoaderOrstrtype2, baseuri, loadingOptions);
            }
            catch (e) {
                if (e instanceof internal_1.ValidationException) {
                    __errors.push(new internal_1.ValidationException('the `type` field is not valid because: ', [e]));
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
            let secondaryFiles;
            if ('secondaryFiles' in _doc) {
                try {
                    secondaryFiles = yield (0, internal_1.loadField)(_doc.secondaryFiles, internal_1.LoaderInstances.secondaryfilesdslunionOfundefinedtypeOrSecondaryFileSchemaLoaderOrarrayOfSecondaryFileSchemaLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `secondaryFiles` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let streamable;
            if ('streamable' in _doc) {
                try {
                    streamable = yield (0, internal_1.loadField)(_doc.streamable, internal_1.LoaderInstances.unionOfundefinedtypeOrbooltype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `streamable` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let format;
            if ('format' in _doc) {
                try {
                    format = yield (0, internal_1.loadField)(_doc.format, internal_1.LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrExpressionLoaderTrueFalseNone, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `format` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let outputBinding;
            if ('outputBinding' in _doc) {
                try {
                    outputBinding = yield (0, internal_1.loadField)(_doc.outputBinding, internal_1.LoaderInstances.unionOfundefinedtypeOrCommandOutputBindingLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `outputBinding` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!CommandOutputRecordField.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`doc\`,\`name\`,\`type\`,\`label\`,\`secondaryFiles\`,\`streamable\`,\`format\`,\`outputBinding\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'CommandOutputRecordField'", __errors);
            }
            const schema = new CommandOutputRecordField({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                doc: doc,
                name: name,
                type: type,
                label: label,
                secondaryFiles: secondaryFiles,
                streamable: streamable,
                format: format,
                outputBinding: outputBinding
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.name != null) {
            const u = (0, internal_1.saveRelativeUri)(this.name, baseUrl, true, relativeUris, undefined);
            if (u != null) {
                r.name = u;
            }
        }
        if (this.doc != null) {
            r.doc = (0, internal_1.save)(this.doc, false, this.name, relativeUris);
        }
        if (this.type != null) {
            r.type = (0, internal_1.save)(this.type, false, this.name, relativeUris);
        }
        if (this.label != null) {
            r.label = (0, internal_1.save)(this.label, false, this.name, relativeUris);
        }
        if (this.secondaryFiles != null) {
            r.secondaryFiles = (0, internal_1.save)(this.secondaryFiles, false, this.name, relativeUris);
        }
        if (this.streamable != null) {
            r.streamable = (0, internal_1.save)(this.streamable, false, this.name, relativeUris);
        }
        if (this.format != null) {
            const u = (0, internal_1.saveRelativeUri)(this.format, this.name, true, relativeUris, undefined);
            if (u != null) {
                r.format = u;
            }
        }
        if (this.outputBinding != null) {
            r.outputBinding = (0, internal_1.save)(this.outputBinding, false, this.name, relativeUris);
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
exports.CommandOutputRecordField = CommandOutputRecordField;
CommandOutputRecordField.attr = new Set(['doc', 'name', 'type', 'label', 'secondaryFiles', 'streamable', 'format', 'outputBinding']);
//# sourceMappingURL=commandOutputRecordField.js.map