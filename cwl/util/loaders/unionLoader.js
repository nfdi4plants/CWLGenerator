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
exports._UnionLoader = void 0;
const internal_1 = require("../internal");
class _UnionLoader {
    constructor(alternates) {
        this.alternates = alternates;
    }
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = [];
            for (const t of this.alternates) {
                try {
                    return yield t.load(doc, baseuri, loadingOptions);
                }
                catch (e) {
                    if (e instanceof internal_1.ValidationException) {
                        errors.push(new internal_1.ValidationException(`tried ${t.constructor.name} but`, [e]));
                    }
                    else {
                        throw e;
                    }
                }
            }
            throw new internal_1.ValidationException('', errors).withBullet('-');
        });
    }
}
exports._UnionLoader = _UnionLoader;
//# sourceMappingURL=unionLoader.js.map