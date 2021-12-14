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
exports.CommandInputArraySchema = void 0;
const internal_1 = require("./util/internal");
const uuid_1 = require("uuid");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandInputArraySchema
 */
class CommandInputArraySchema extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, name, items, type, label, doc, inputBinding }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.name = name;
        this.items = items;
        this.type = type;
        this.label = label;
        this.doc = doc;
        this.inputBinding = inputBinding;
    }
    /**
     * Used to construct instances of {@link CommandInputArraySchema }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link CommandInputArraySchema }
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
                    name = yield (0, internal_1.loadField)(_doc.name, internal_1.LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNone, baseuri, loadingOptions);
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
                    name = "_" + (0, uuid_1.v4)();
                }
            }
            else {
                baseuri = name;
            }
            let items;
            try {
                items = yield (0, internal_1.loadField)(_doc.items, internal_1.LoaderInstances.typedslunionOfCWLTypeLoaderOrCommandInputRecordSchemaLoaderOrCommandInputEnumSchemaLoaderOrCommandInputArraySchemaLoaderOrstrtypeOrarrayOfunionOfCWLTypeLoaderOrCommandInputRecordSchemaLoaderOrCommandInputEnumSchemaLoaderOrCommandInputArraySchemaLoaderOrstrtype2, baseuri, loadingOptions);
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
            let inputBinding;
            if ('inputBinding' in _doc) {
                try {
                    inputBinding = yield (0, internal_1.loadField)(_doc.inputBinding, internal_1.LoaderInstances.unionOfundefinedtypeOrCommandLineBindingLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `inputBinding` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!CommandInputArraySchema.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`items\`,\`type\`,\`label\`,\`doc\`,\`name\`,\`inputBinding\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'CommandInputArraySchema'", __errors);
            }
            const schema = new CommandInputArraySchema({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                items: items,
                type: type,
                label: label,
                doc: doc,
                name: name,
                inputBinding: inputBinding
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
        if (this.items != null) {
            r.items = (0, internal_1.save)(this.items, false, this.name, relativeUris);
        }
        if (this.type != null) {
            r.type = (0, internal_1.save)(this.type, false, this.name, relativeUris);
        }
        if (this.label != null) {
            r.label = (0, internal_1.save)(this.label, false, this.name, relativeUris);
        }
        if (this.doc != null) {
            r.doc = (0, internal_1.save)(this.doc, false, this.name, relativeUris);
        }
        if (this.inputBinding != null) {
            r.inputBinding = (0, internal_1.save)(this.inputBinding, false, this.name, relativeUris);
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
exports.CommandInputArraySchema = CommandInputArraySchema;
CommandInputArraySchema.attr = new Set(['items', 'type', 'label', 'doc', 'name', 'inputBinding']);
//# sourceMappingURL=commandInputArraySchema.js.map