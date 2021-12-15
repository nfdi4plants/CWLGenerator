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
const chai_1 = require("chai");
const internal_1 = require("../util/internal");
class TestLoader {
    load(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            return doc;
        });
    }
}
const testLoader = new TestLoader();
describe('Test IdMapLoader', () => {
    describe('load', () => {
        it('should load the document', () => __awaiter(void 0, void 0, void 0, function* () {
            const loader = new internal_1._IdMapLoader(testLoader, 'key', 'value');
            const doc = {
                shaggy: {
                    value: 'scooby'
                },
                fred: 'daphne',
                velma: ['fred', 'candy']
            };
            chai_1.assert.deepEqual(yield loader.load(doc, '', new internal_1.LoadingOptions({})), [
                { value: 'daphne', key: 'fred' },
                { value: 'scooby', key: 'shaggy' },
                { value: ['fred', 'candy'], key: 'velma' }
            ]);
        }));
        it('should throw a ValidationException with the message "No mapPredicate"', () => __awaiter(void 0, void 0, void 0, function* () {
            const loader = new internal_1._IdMapLoader(testLoader, 'key');
            const doc = {
                fred: 'daphne'
            };
            let err;
            try {
                yield loader.load(doc, '', new internal_1.LoadingOptions({}));
            }
            catch (e) {
                err = e;
            }
            chai_1.assert.exists(err);
            chai_1.assert.isTrue(err instanceof internal_1.ValidationException);
            chai_1.assert.equal(err.message, 'No mapPredicate');
        }));
    });
});
//# sourceMappingURL=idMap.spec.js.map