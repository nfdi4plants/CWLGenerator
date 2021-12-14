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
exports.expandUrl = exports.loadField = void 0;
const internal_1 = require("../internal");
const URI = __importStar(require("uri-js"));
function loadField(val, fieldType, baseuri, loadingOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (internal_1.TypeGuards.isDictionary(val)) {
            if ('$import' in val) {
                if (loadingOptions.fileUri == null) {
                    throw Error('Cannot load $import without fileuri');
                }
                return yield (0, internal_1.documentLoadByUrl)(fieldType, loadingOptions.fetcher.urljoin(loadingOptions.fileUri, val.$import), loadingOptions);
            }
            else if ('$include' in val) {
                if (loadingOptions.fileUri == null) {
                    throw Error('Cannot load $import without fileuri');
                }
                val = yield loadingOptions.fetcher.fetchText(loadingOptions.fetcher.urljoin(loadingOptions.fileUri, val.$include));
            }
        }
        return yield fieldType.load(val, baseuri, loadingOptions);
    });
}
exports.loadField = loadField;
function expandUrl(url, baseUrl, loadingOptions, scopedId = false, vocabTerm = false, scopedRef) {
    var _a, _b, _c, _d, _e;
    if (['@id', '@type'].includes(url)) {
        return url;
    }
    if (vocabTerm && url in loadingOptions.vocab) {
        return url;
    }
    if (loadingOptions.vocab != null && url.includes(':')) {
        const prefix = url.split(':')[0];
        if (prefix in loadingOptions.vocab) {
            url = loadingOptions.vocab[prefix] + url.slice(prefix.length + 1);
        }
    }
    const split = URI.parse(url);
    if ((split.scheme != null && ['http', 'https', 'file'].includes(split.scheme)) || url.startsWith('$(') || url.startsWith('${')) {
    }
    else if (scopedId && split.fragment === undefined) {
        const splitbase = URI.parse(baseUrl);
        let frg = '';
        if (splitbase.fragment != null) {
            frg = splitbase.fragment + '/' + ((_a = split.path) !== null && _a !== void 0 ? _a : '');
        }
        else {
            frg = (_b = split.path) !== null && _b !== void 0 ? _b : '';
        }
        const pt = (_c = splitbase.path) !== null && _c !== void 0 ? _c : '/';
        const parts = {
            scheme: splitbase.scheme,
            userinfo: undefined,
            host: splitbase.host,
            port: undefined,
            path: pt,
            query: splitbase.query,
            fragment: frg,
            reference: undefined,
            error: undefined
        };
        url = URI.serialize(parts);
    }
    else if (scopedRef != null && split.fragment === undefined) {
        const splitbase = URI.parse(baseUrl);
        const sp = (_e = (_d = splitbase.fragment) === null || _d === void 0 ? void 0 : _d.split('/')) !== null && _e !== void 0 ? _e : [];
        let n = scopedRef;
        while (n > 0 && (sp === null || sp === void 0 ? void 0 : sp.length) > 0) {
            sp.pop();
            n -= 1;
        }
        sp.push(url);
        const parts = {
            scheme: splitbase.scheme,
            userinfo: undefined,
            host: splitbase.host,
            port: undefined,
            path: splitbase.path,
            query: splitbase.query,
            fragment: sp.join('/'),
            reference: undefined,
            error: undefined
        };
        url = URI.serialize(parts);
    }
    else {
        url = loadingOptions.fetcher.urljoin(baseUrl, url);
    }
    if (vocabTerm) {
        const split = URI.parse(url);
        if (split.scheme !== undefined) {
            if (url in loadingOptions.rvocab) {
                return loadingOptions.rvocab[url];
            }
        }
        else {
            throw new internal_1.ValidationException(`Term '${url}' not in vocabulary`);
        }
    }
    return url;
}
exports.expandUrl = expandUrl;
//# sourceMappingURL=loader.js.map