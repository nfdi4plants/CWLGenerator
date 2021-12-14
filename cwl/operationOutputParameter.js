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
exports.OperationOutputParameter = void 0;
const internal_1 = require("./util/internal");
const uuid_1 = require("uuid");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#OperationOutputParameter
 *
 * Describe an output parameter of an operation.
 *
 */
class OperationOutputParameter extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, id, label, secondaryFiles, streamable, doc, format, type }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.id = id;
        this.label = label;
        this.secondaryFiles = secondaryFiles;
        this.streamable = streamable;
        this.doc = doc;
        this.format = format;
        this.type = type;
    }
    /**
     * Used to construct instances of {@link OperationOutputParameter }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link OperationOutputParameter }
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
            let type;
            try {
                type = yield (0, internal_1.loadField)(_doc.type, internal_1.LoaderInstances.typedslunionOfCWLTypeLoaderOrOutputRecordSchemaLoaderOrOutputEnumSchemaLoaderOrOutputArraySchemaLoaderOrstrtypeOrarrayOfunionOfCWLTypeLoaderOrOutputRecordSchemaLoaderOrOutputEnumSchemaLoaderOrOutputArraySchemaLoaderOrstrtype2, baseuri, loadingOptions);
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
                if (!OperationOutputParameter.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`label\`,\`secondaryFiles\`,\`streamable\`,\`doc\`,\`id\`,\`format\`,\`type\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'OperationOutputParameter'", __errors);
            }
            const schema = new OperationOutputParameter({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                label: label,
                secondaryFiles: secondaryFiles,
                streamable: streamable,
                doc: doc,
                id: id,
                format: format,
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
        if (this.id != null) {
            const u = (0, internal_1.saveRelativeUri)(this.id, baseUrl, true, relativeUris, undefined);
            if (u != null) {
                r.id = u;
            }
        }
        if (this.label != null) {
            r.label = (0, internal_1.save)(this.label, false, this.id, relativeUris);
        }
        if (this.secondaryFiles != null) {
            r.secondaryFiles = (0, internal_1.save)(this.secondaryFiles, false, this.id, relativeUris);
        }
        if (this.streamable != null) {
            r.streamable = (0, internal_1.save)(this.streamable, false, this.id, relativeUris);
        }
        if (this.doc != null) {
            r.doc = (0, internal_1.save)(this.doc, false, this.id, relativeUris);
        }
        if (this.format != null) {
            const u = (0, internal_1.saveRelativeUri)(this.format, this.id, true, relativeUris, undefined);
            if (u != null) {
                r.format = u;
            }
        }
        if (this.type != null) {
            r.type = (0, internal_1.save)(this.type, false, this.id, relativeUris);
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
exports.OperationOutputParameter = OperationOutputParameter;
OperationOutputParameter.attr = new Set(['label', 'secondaryFiles', 'streamable', 'doc', 'id', 'format', 'type']);
//# sourceMappingURL=operationOutputParameter.js.map