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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDocumentByString = exports.loadDocument = exports.documentLoadByUrl = exports.documentLoad = void 0;
const internal_1 = require("../internal");
const yaml = __importStar(require("js-yaml"));
const URL = __importStar(require("url"));
function documentLoad(loader, doc, baseuri, loadingOptions) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof doc === 'string') {
            return yield documentLoadByUrl(loader, loadingOptions.fetcher.urljoin(baseuri, doc), loadingOptions);
        }
        if (Array.isArray(doc)) {
            return yield loader.load(doc, baseuri, loadingOptions);
        }
        if (internal_1.TypeGuards.isDictionary(doc)) {
            if (doc != null) {
                if ('$namespaces' in doc || '$schemas' in doc) {
                    loadingOptions = new internal_1.LoadingOptions({ copyFrom: loadingOptions, namespaces: (_a = doc.$namespaces) !== null && _a !== void 0 ? _a : undefined, schemas: (_b = doc.$schemas) !== null && _b !== void 0 ? _b : undefined });
                    delete doc.$schemas;
                    delete doc.$namespaces;
                }
                if ('$base' in doc) {
                    baseuri = doc.$base;
                }
                if ('$graph' in doc) {
                    return yield loader.load(doc.$graph, baseuri, loadingOptions);
                }
                else {
                    return yield loader.load(doc, baseuri, loadingOptions);
                }
            }
        }
        throw new Error('Reached unexpected path');
    });
}
exports.documentLoad = documentLoad;
function documentLoadByUrl(loader, url, loadingOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (url in loadingOptions.idx) {
            return yield documentLoad(loader, loadingOptions.idx[url], url, loadingOptions);
        }
        const text = yield loadingOptions.fetcher.fetchText(url);
        const result = yaml.load(text);
        loadingOptions.idx[url] = result;
        loadingOptions = new internal_1.LoadingOptions({ copyFrom: loadingOptions, fileUri: url });
        return yield documentLoad(loader, result, url, loadingOptions);
    });
}
exports.documentLoadByUrl = documentLoadByUrl;
function loadDocument(doc, baseuri, loadingOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (baseuri == null) {
            baseuri = URL.pathToFileURL(process.cwd() + '/').toString();
        }
        if (loadingOptions == null) {
            loadingOptions = new internal_1.LoadingOptions({});
        }
        return yield documentLoad(internal_1.LoaderInstances.unionOfCommandLineToolLoaderOrExpressionToolLoaderOrWorkflowLoaderOrOperationLoaderOrarrayOfunionOfCommandLineToolLoaderOrExpressionToolLoaderOrWorkflowLoaderOrOperationLoader, doc, baseuri, loadingOptions);
    });
}
exports.loadDocument = loadDocument;
function loadDocumentByString(doc, uri, loadingOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yaml.load(doc);
        if (loadingOptions == null) {
            loadingOptions = new internal_1.LoadingOptions({ fileUri: uri });
        }
        loadingOptions.idx[uri] = result;
        return yield documentLoad(internal_1.LoaderInstances.unionOfCommandLineToolLoaderOrExpressionToolLoaderOrWorkflowLoaderOrOperationLoaderOrarrayOfunionOfCommandLineToolLoaderOrExpressionToolLoaderOrWorkflowLoaderOrOperationLoader, result, uri, loadingOptions);
    });
}
exports.loadDocumentByString = loadDocumentByString;
//# sourceMappingURL=rootloader.js.map