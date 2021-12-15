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
exports._TypeDSLLoader = void 0;
const internal_1 = require("../internal");
class _TypeDSLLoader {
    constructor(inner, refScope) {
        this.typeDSLRegex = /^([^[?]+)(\[\])?(\?)?$/;
        this.inner = inner;
        this.refScope = refScope;
    }
    resolve(doc, baseuri, loadingOptions) {
        var _a;
        const m = this.typeDSLRegex.exec(doc);
        if (m != null) {
            const group1 = m[1];
            if (group1 == null) {
                throw Error();
            }
            const first = (0, internal_1.expandUrl)(group1, baseuri, loadingOptions, false, true, this.refScope);
            var second;
            var third;
            if (m[2] != null) {
                second = { type: 'array', items: first };
            }
            if (m[3] != null) {
                third = ['null', second !== null && second !== void 0 ? second : first];
            }
            return (_a = third !== null && third !== void 0 ? third : second) !== null && _a !== void 0 ? _a : first;
        }
        return doc;
    }
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(doc)) {
                const r = [];
                for (const d of doc) {
                    if (typeof d === 'string') {
                        const resolved = this.resolve(d, baseuri, loadingOptions);
                        if (Array.isArray(resolved)) {
                            for (const i of resolved) {
                                if (!r.includes(i)) {
                                    r.push(i);
                                }
                            }
                        }
                        else {
                            if (!r.includes(resolved)) {
                                r.push(resolved);
                            }
                        }
                    }
                    else {
                        r.push(d);
                    }
                }
                doc = r;
            }
            else if (typeof doc === 'string') {
                doc = this.resolve(doc, baseuri, loadingOptions);
            }
            return yield this.inner.load(doc, baseuri, loadingOptions);
        });
    }
}
exports._TypeDSLLoader = _TypeDSLLoader;
//# sourceMappingURL=typeDSLLoader.js.map