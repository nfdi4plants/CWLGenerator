"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const chai_1 = require("chai");
const internal_1 = require("../util/internal");
const sinon_1 = __importDefault(require("sinon"));
const fetchModule = __importStar(require("node-fetch"));
const node_fetch_1 = require("node-fetch");
const path_1 = __importDefault(require("path"));
const url_1 = __importDefault(require("url"));
describe('Test Fetcher', () => {
    const fet = new internal_1.DefaultFetcher();
    describe('Test fetchText()', () => {
        afterEach(function () {
            sinon_1.default.restore();
        });
        it('Should fetch text from http urls', () => __awaiter(void 0, void 0, void 0, function* () {
            sinon_1.default.stub(fetchModule, 'default').returns(new Promise((resolve) => resolve(new node_fetch_1.Response('test', { status: 200 }))));
            chai_1.assert.equal(yield fet.fetchText('http://www.example.com'), 'test');
        }));
        it('Should fetch text from https urls', () => __awaiter(void 0, void 0, void 0, function* () {
            sinon_1.default.stub(fetchModule, 'default').returns(new Promise((resolve) => resolve(new node_fetch_1.Response('test', { status: 200 }))));
            chai_1.assert.equal(yield fet.fetchText('https://www.example.com'), 'test');
        }));
        it('Should fetch text from files', () => __awaiter(void 0, void 0, void 0, function* () {
            const filepath = url_1.default.pathToFileURL(path_1.default.resolve('./src/test/data/test.txt')).toString();
            chai_1.assert.equal(yield fet.fetchText(filepath), 'test\n');
        }));
        it('Throw a 404 exception', () => __awaiter(void 0, void 0, void 0, function* () {
            sinon_1.default.stub(fetchModule, 'default').returns(new Promise((resolve) => resolve(new node_fetch_1.Response('test', { status: 404 }))));
            let err;
            try {
                yield fet.fetchText('https://www.example.com');
            }
            catch (e) {
                err = e;
            }
            chai_1.assert.exists(err);
            chai_1.assert.isTrue(err instanceof internal_1.ValidationException);
            chai_1.assert.equal(err.message, 'Error fetching https://www.example.com: HTTP Error Response: 404 Not Found');
        }));
        it('Throw an invalid schema exception', () => __awaiter(void 0, void 0, void 0, function* () {
            let err;
            try {
                yield fet.fetchText('invalidscheme://www.example.com');
            }
            catch (e) {
                err = e;
            }
            chai_1.assert.exists(err);
            chai_1.assert.isTrue(err instanceof internal_1.ValidationException);
            chai_1.assert.equal(err.message, 'Unsupported scheme invalidscheme in url: invalidscheme://www.example.com');
        }));
    });
    describe('Test urlJoin()', () => {
        it('Should correctly join urls', () => __awaiter(void 0, void 0, void 0, function* () {
            chai_1.assert.equal(fet.urljoin('http://example.com/base', 'one'), 'http://example.com/one');
            chai_1.assert.equal(fet.urljoin('http://example.com/base', 'two'), 'http://example.com/two');
            chai_1.assert.equal(fet.urljoin('http://example.com/base', '#three'), 'http://example.com/base#three');
            chai_1.assert.equal(fet.urljoin('http://example.com/base', 'four#five'), 'http://example.com/four#five');
            chai_1.assert.equal(fet.urljoin('http://example.com/base', '_:five'), '_:five');
        }));
        it('Should throw a remote exploit exception', () => __awaiter(void 0, void 0, void 0, function* () {
            let err;
            try {
                fet.urljoin('http://example.com/base', 'file:///test/test.txt');
            }
            catch (e) {
                err = e;
            }
            chai_1.assert.exists(err);
            chai_1.assert.isTrue(err instanceof internal_1.ValidationException);
            chai_1.assert.equal(err.message, 'Not resolving potential remote exploit file:///test/test.txt from base http://example.com/base');
        }));
    });
});
//# sourceMappingURL=fetcher.spec.js.map