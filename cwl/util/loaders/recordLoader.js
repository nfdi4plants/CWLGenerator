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
exports._RecordLoader = void 0;
const internal_1 = require("../internal");
class _RecordLoader {
    constructor(createrFunc) {
        this.creatorFunc = createrFunc;
    }
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!internal_1.TypeGuards.isDictionary(doc)) {
                throw new internal_1.ValidationException('Expected a dict');
            }
            return yield this.creatorFunc(doc, baseuri, loadingOptions, docRoot);
        });
    }
}
exports._RecordLoader = _RecordLoader;
//# sourceMappingURL=recordLoader.js.map