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
exports.CommandLineBinding = void 0;
const internal_1 = require("./util/internal");
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#CommandLineBinding
 *
 *
 * When listed under `inputBinding` in the input schema, the term
 * "value" refers to the the corresponding value in the input object.  For
 * binding objects listed in `CommandLineTool.arguments`, the term "value"
 * refers to the effective value after evaluating `valueFrom`.
 *
 * The binding behavior when building the command line depends on the data
 * type of the value.  If there is a mismatch between the type described by
 * the input schema and the effective value, such as resulting from an
 * expression evaluation, an implementation must use the data type of the
 * effective value.
 *
 *   - **string**: Add `prefix` and the string to the command line.
 *
 *   - **number**: Add `prefix` and decimal representation to command line.
 *
 *   - **boolean**: If true, add `prefix` to the command line.  If false, add
 *       nothing.
 *
 *   - **File**: Add `prefix` and the value of
 *     [`File.path`](#File) to the command line.
 *
 *   - **Directory**: Add `prefix` and the value of
 *     [`Directory.path`](#Directory) to the command line.
 *
 *   - **array**: If `itemSeparator` is specified, add `prefix` and the join
 *       the array into a single string with `itemSeparator` separating the
 *       items.  Otherwise first add `prefix`, then recursively process
 *       individual elements.
 *       If the array is empty, it does not add anything to command line.
 *
 *   - **object**: Add `prefix` only, and recursively add object fields for
 *       which `inputBinding` is specified.
 *
 *   - **null**: Add nothing.
 *
 */
class CommandLineBinding extends internal_1.Saveable {
    constructor({ extensionFields, loadingOptions, loadContents, position, prefix, separate, itemSeparator, valueFrom, shellQuote }) {
        super();
        this.extensionFields = extensionFields !== null && extensionFields !== void 0 ? extensionFields : {};
        this.loadingOptions = loadingOptions !== null && loadingOptions !== void 0 ? loadingOptions : new internal_1.LoadingOptions({});
        this.loadContents = loadContents;
        this.position = position;
        this.prefix = prefix;
        this.separate = separate;
        this.itemSeparator = itemSeparator;
        this.valueFrom = valueFrom;
        this.shellQuote = shellQuote;
    }
    /**
     * Used to construct instances of {@link CommandLineBinding }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link CommandLineBinding }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const _doc = Object.assign({}, __doc);
            const __errors = [];
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
            let position;
            if ('position' in _doc) {
                try {
                    position = yield (0, internal_1.loadField)(_doc.position, internal_1.LoaderInstances.unionOfundefinedtypeOrinttypeOrExpressionLoader, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `position` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let prefix;
            if ('prefix' in _doc) {
                try {
                    prefix = yield (0, internal_1.loadField)(_doc.prefix, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `prefix` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let separate;
            if ('separate' in _doc) {
                try {
                    separate = yield (0, internal_1.loadField)(_doc.separate, internal_1.LoaderInstances.unionOfundefinedtypeOrbooltype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `separate` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            let itemSeparator;
            if ('itemSeparator' in _doc) {
                try {
                    itemSeparator = yield (0, internal_1.loadField)(_doc.itemSeparator, internal_1.LoaderInstances.unionOfundefinedtypeOrstrtype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `itemSeparator` field is not valid because: ', [e]));
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
            let shellQuote;
            if ('shellQuote' in _doc) {
                try {
                    shellQuote = yield (0, internal_1.loadField)(_doc.shellQuote, internal_1.LoaderInstances.unionOfundefinedtypeOrbooltype, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        __errors.push(new internal_1.ValidationException('the `shellQuote` field is not valid because: ', [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            const extensionFields = {};
            for (const [key, value] of Object.entries(_doc)) {
                if (!CommandLineBinding.attr.has(key)) {
                    if (key.includes(':')) {
                        const ex = (0, internal_1.expandUrl)(key, '', loadingOptions, false, false);
                        extensionFields[ex] = value;
                    }
                    else {
                        __errors.push(new internal_1.ValidationException(`invalid field ${key}, \
            expected one of: \`loadContents\`,\`position\`,\`prefix\`,\`separate\`,\`itemSeparator\`,\`valueFrom\`,\`shellQuote\``));
                        break;
                    }
                }
            }
            if (__errors.length > 0) {
                throw new internal_1.ValidationException("Trying 'CommandLineBinding'", __errors);
            }
            const schema = new CommandLineBinding({
                extensionFields: extensionFields,
                loadingOptions: loadingOptions,
                loadContents: loadContents,
                position: position,
                prefix: prefix,
                separate: separate,
                itemSeparator: itemSeparator,
                valueFrom: valueFrom,
                shellQuote: shellQuote
            });
            return schema;
        });
    }
    save(top = false, baseUrl = '', relativeUris = true) {
        const r = {};
        for (const ef in this.extensionFields) {
            r[(0, internal_1.prefixUrl)(ef, this.loadingOptions.vocab)] = this.extensionFields.ef;
        }
        if (this.loadContents != null) {
            r.loadContents = (0, internal_1.save)(this.loadContents, false, baseUrl, relativeUris);
        }
        if (this.position != null) {
            r.position = (0, internal_1.save)(this.position, false, baseUrl, relativeUris);
        }
        if (this.prefix != null) {
            r.prefix = (0, internal_1.save)(this.prefix, false, baseUrl, relativeUris);
        }
        if (this.separate != null) {
            r.separate = (0, internal_1.save)(this.separate, false, baseUrl, relativeUris);
        }
        if (this.itemSeparator != null) {
            r.itemSeparator = (0, internal_1.save)(this.itemSeparator, false, baseUrl, relativeUris);
        }
        if (this.valueFrom != null) {
            r.valueFrom = (0, internal_1.save)(this.valueFrom, false, baseUrl, relativeUris);
        }
        if (this.shellQuote != null) {
            r.shellQuote = (0, internal_1.save)(this.shellQuote, false, baseUrl, relativeUris);
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
exports.CommandLineBinding = CommandLineBinding;
CommandLineBinding.attr = new Set(['loadContents', 'position', 'prefix', 'separate', 'itemSeparator', 'valueFrom', 'shellQuote']);
//# sourceMappingURL=commandLineBinding.js.map