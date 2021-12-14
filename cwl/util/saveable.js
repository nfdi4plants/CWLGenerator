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
exports.prefixUrl = exports.saveRelativeUri = exports.save = exports.Saveable = void 0;
const internal_1 = require("./internal");
const URI = __importStar(require("uri-js"));
const path_1 = __importDefault(require("path"));
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Saveable {
    static fromDoc(doc, baseuri, loadingOptions, docRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Not Implemented');
        });
    }
}
exports.Saveable = Saveable;
function save(val, top = true, baseUrl = '', relativeUris = true) {
    if (val instanceof Saveable) {
        return val.save(top, baseUrl, relativeUris);
    }
    if (Array.isArray(val)) {
        const r = [];
        for (const v of val) {
            r.push(save(v, false, baseUrl, relativeUris));
        }
        return r;
    }
    if (internal_1.TypeGuards.isDictionary(val)) {
        const newDict = {};
        for (const key in val) {
            newDict[key] = save(val[key], false, baseUrl, relativeUris);
        }
        return newDict;
    }
    return val;
}
exports.save = save;
function saveRelativeUri(uri, baseUrl = '', scopedId, relativeUris, refScope) {
    if (relativeUris == null || uri === baseUrl) {
        return uri;
    }
    if (Array.isArray(uri)) {
        const r = [];
        for (const v of uri) {
            r.push(saveRelativeUri(v, baseUrl, scopedId, relativeUris, refScope));
        }
        return r;
    }
    else if (typeof uri === 'string') {
        const uriSplit = URI.parse(uri);
        const baseSplit = URI.parse(baseUrl);
        if (uriSplit.path == null || baseSplit.path == null) {
            throw new Error('uri or baseurl need to contain a path.');
        }
        if (uriSplit.scheme === baseSplit.scheme && uriSplit.host === baseSplit.host) {
            if (uriSplit.path !== baseSplit.path) {
                let p = path_1.default.relative(path_1.default.dirname(baseSplit.path), uriSplit.path);
                if (uriSplit.fragment != null) {
                    p = p + '#' + uriSplit.fragment;
                }
                return p;
            }
            if (baseSplit.fragment == null) {
                baseSplit.fragment = '';
            }
            let basefrag = baseSplit.fragment + '/';
            if (refScope != null) {
                const sp = basefrag.split('/');
                let i = 0;
                while (i < refScope) {
                    sp.pop();
                    i += 1;
                }
                basefrag = sp.join('/');
            }
            if (uriSplit.fragment == null) {
                uriSplit.fragment = '';
            }
            if (uriSplit.fragment.startsWith(basefrag)) {
                return uriSplit.fragment.slice(basefrag.length);
            }
            else {
                return uriSplit.fragment;
            }
        }
        else {
            return save(uri, false, baseUrl);
        }
    }
}
exports.saveRelativeUri = saveRelativeUri;
function prefixUrl(url, namespaces) {
    for (const k in namespaces) {
        if (url.startsWith(namespaces.k)) {
            return k + ':' + url.slice(namespaces.k.length);
        }
    }
    return url;
}
exports.prefixUrl = prefixUrl;
//# sourceMappingURL=saveable.js.map