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
exports._SecondaryDSLLoader = void 0;
const internal_1 = require("../internal");
const validationException_1 = require("../validationException");
class _SecondaryDSLLoader {
    constructor(inner) {
        this.inner = inner;
    }
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = [];
            if (Array.isArray(doc)) {
                for (const d of doc) {
                    if (typeof d === 'string') {
                        if (d.endsWith('?')) {
                            r.push({ pattern: d.slice(0, -1), required: false });
                        }
                        else {
                            r.push({ pattern: d });
                        }
                    }
                    else if (internal_1.TypeGuards.isDictionary(d)) {
                        const newDict = {};
                        if ('pattern' in d) {
                            newDict.pattern = d.pattern;
                            delete d.pattern;
                        }
                        else {
                            throw new validationException_1.ValidationException(`Missing pattern in secondaryFiles specification entry: ${JSON.stringify(d)}`);
                        }
                        if ('required' in d) {
                            newDict.required = d.required;
                            delete d.required;
                        }
                        if (Object.keys(d).length > 0) {
                            throw new validationException_1.ValidationException(`Unallowed values in secondaryFiles specification entry: ${JSON.stringify(d)}`);
                        }
                        r.push(newDict);
                    }
                    else {
                        throw new validationException_1.ValidationException('Expected a string or sequence of (strings or mappings).');
                    }
                }
            }
            else if (internal_1.TypeGuards.isDictionary(doc)) {
                const newDict = {};
                if ('pattern' in doc) {
                    newDict.pattern = doc.pattern;
                    delete doc.pattern;
                }
                else {
                    throw new validationException_1.ValidationException(`Missing pattern in secondaryFiles specification entry: ${JSON.stringify(doc)}`);
                }
                if ('required' in doc) {
                    newDict.required = doc.required;
                    delete doc.required;
                }
                if (Object.keys(doc).length > 0) {
                    throw new validationException_1.ValidationException(`Unallowed values in secondaryFiles specification entry: ${JSON.stringify(doc)}`);
                }
                r.push(newDict);
            }
            else if (typeof doc === 'string') {
                if (doc.endsWith('?')) {
                    r.push({ pattern: doc.slice(0, -1), required: false });
                }
                else {
                    r.push({ pattern: doc });
                }
            }
            else {
                throw new validationException_1.ValidationException('Expected str or sequence of str');
            }
            return yield this.inner.load(r, baseuri, loadingOptions, docRoot);
        });
    }
}
exports._SecondaryDSLLoader = _SecondaryDSLLoader;
//# sourceMappingURL=secondaryDSLLoader.js.map