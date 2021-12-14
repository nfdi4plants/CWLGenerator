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
exports._EnumLoader = void 0;
const internal_1 = require("../internal");
class _EnumLoader {
    constructor(symbols) {
        this.symbols = symbols;
    }
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.symbols.includes(doc)) {
                return doc;
            }
            else {
                throw new internal_1.ValidationException(`Expected one of ${this.symbols.toString()}`);
            }
        });
    }
}
exports._EnumLoader = _EnumLoader;
//# sourceMappingURL=enumLoader.js.map