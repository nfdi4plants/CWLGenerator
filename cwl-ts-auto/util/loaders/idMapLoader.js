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
exports._IdMapLoader = void 0;
const internal_1 = require("../internal");
class _IdMapLoader {
    constructor(inner, mapSubject, mapPredicate) {
        this.inner = inner;
        this.mapSubject = mapSubject;
        this.mapPredicate = mapPredicate;
    }
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (internal_1.TypeGuards.isDictionary(doc)) {
                const r = [];
                for (var k of Object.keys(doc).sort(undefined)) {
                    const val = doc[k];
                    if (internal_1.TypeGuards.isDictionary(val)) {
                        const v2 = Object.assign({}, val);
                        v2[this.mapSubject] = k;
                        r.push(v2);
                    }
                    else {
                        if (this.mapPredicate != null) {
                            const v3 = {};
                            v3[this.mapPredicate] = val;
                            v3[this.mapSubject] = k;
                            r.push(v3);
                        }
                        else {
                            throw new internal_1.ValidationException('No mapPredicate');
                        }
                    }
                }
                doc = r;
            }
            return yield this.inner.load(doc, baseuri, loadingOptions);
        });
    }
}
exports._IdMapLoader = _IdMapLoader;
//# sourceMappingURL=idMapLoader.js.map