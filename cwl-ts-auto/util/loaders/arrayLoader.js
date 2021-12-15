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
exports._ArrayLoader = void 0;
const internal_1 = require("../internal");
class _ArrayLoader {
    constructor(items) {
        this.items = items;
    }
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Array.isArray(doc)) {
                throw new internal_1.ValidationException('Expected a list');
            }
            let r = [];
            const errors = [];
            for (var val of doc) {
                try {
                    const lf = yield (0, internal_1.loadField)(val, new internal_1._UnionLoader([this, ...this.items]), baseuri, loadingOptions);
                    if (Array.isArray(lf)) {
                        r = r.concat(lf);
                    }
                    else {
                        r.push(lf);
                    }
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        errors.push(e);
                    }
                    else {
                        throw e;
                    }
                }
            }
            if (errors.length > 0) {
                throw new internal_1.ValidationException('', errors);
            }
            return r;
        });
    }
}
exports._ArrayLoader = _ArrayLoader;
//# sourceMappingURL=arrayLoader.js.map