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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const internal_1 = require("../util/internal");
chai_1.default.use(chai_as_promised_1.default);
const assert = chai_1.default.assert;
const loader = new internal_1._AnyLoader();
describe('Test AnyLoader', () => {
    it('Should load the documents', () => __awaiter(void 0, void 0, void 0, function* () {
        assert.deepEqual(yield loader.load({}, '', new internal_1.LoadingOptions({})), {});
        assert.equal(yield loader.load(2, '', new internal_1.LoadingOptions({})), 2);
        assert.equal(yield loader.load('2', '', new internal_1.LoadingOptions({})), '2');
        assert.deepEqual(yield loader.load([2], '', new internal_1.LoadingOptions({})), [2]);
    }));
    it('Should throw an exception on null-like input', () => __awaiter(void 0, void 0, void 0, function* () {
        yield assert.isRejected(loader.load(undefined, '', new internal_1.LoadingOptions({})), 'Expected non-null');
        yield assert.isRejected(loader.load(null, '', new internal_1.LoadingOptions({})), 'Expected non-null');
    }));
});
//# sourceMappingURL=anyLoader.spec.js.map