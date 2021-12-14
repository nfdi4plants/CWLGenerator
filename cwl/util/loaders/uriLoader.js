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
exports._URILoader = void 0;
const internal_1 = require("../internal");
class _URILoader {
    constructor(inner, scopedID, vocabTerm, scopedRef) {
        this.inner = inner;
        this.scopedID = scopedID;
        this.vocabTerm = vocabTerm;
        this.scopedRef = scopedRef;
    }
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(doc)) {
                const newDoc = [];
                for (const val of doc) {
                    if (typeof val === 'string') {
                        newDoc.push((0, internal_1.expandUrl)(val, baseuri, loadingOptions, this.scopedID, this.vocabTerm, this.scopedRef));
                    }
                    else {
                        newDoc.push(val);
                    }
                }
                doc = newDoc;
            }
            else if (typeof doc === 'string') {
                doc = (0, internal_1.expandUrl)(doc, baseuri, loadingOptions, this.scopedID, this.vocabTerm, this.scopedRef);
            }
            return yield this.inner.load(doc, baseuri, loadingOptions);
        });
    }
}
exports._URILoader = _URILoader;
//# sourceMappingURL=uriLoader.js.map