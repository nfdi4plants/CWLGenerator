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
exports.DefaultFetcher = exports.Fetcher = void 0;
const internal_1 = require("./internal");
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs = __importStar(require("fs"));
const URI = __importStar(require("uri-js"));
// Code implemented after https://github.com/common-workflow-language/schema_salad/blob/main/schema_salad/fetcher.py
class Fetcher {
}
exports.Fetcher = Fetcher;
Fetcher.schemes = ['file', 'http', 'https', 'mailto'];
class DefaultFetcher extends Fetcher {
    fetchText(urlString) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: cache
            const split = URI.parse(urlString);
            const scheme = (_a = split.scheme) !== null && _a !== void 0 ? _a : '';
            if (Fetcher.schemes.includes(scheme)) {
                if (['http', 'https'].includes(scheme)) {
                    try {
                        // TODO: content types
                        const result = yield (0, node_fetch_1.default)(new URL(urlString));
                        if (!result.ok) {
                            throw Error(`HTTP Error Response: ${result.status} ${result.statusText}`);
                        }
                        return yield result.text();
                    }
                    catch (e) {
                        if (e instanceof Error) {
                            throw new internal_1.ValidationException(`Error fetching ${urlString}: ${e.message}`);
                        }
                        else {
                            throw e;
                        }
                    }
                }
                else if (scheme === 'file') {
                    try {
                        return fs.readFileSync((_b = split.path) !== null && _b !== void 0 ? _b : '', { encoding: 'utf8' });
                    }
                    catch (e) {
                        if (e instanceof Error) {
                            throw new internal_1.ValidationException(`Error reading file ${urlString}: ${e.message}`);
                        }
                        else {
                            throw e;
                        }
                    }
                }
            }
            throw new internal_1.ValidationException(`Unsupported scheme ${scheme} in url: ${urlString}`);
        });
    }
    checkExists(url) {
        throw new Error('Not implemented.');
    }
    urljoin(baseUrlString, urlString) {
        if (urlString.startsWith('_:')) {
            return urlString;
        }
        const baseUrl = URI.parse(baseUrlString);
        const url = URI.parse(urlString);
        if (baseUrl.scheme != null && baseUrl.scheme !== 'file' && url.scheme === 'file') {
            throw new internal_1.ValidationException(`Not resolving potential remote exploit ${urlString} from base ${baseUrlString}`);
        }
        // TODO: Windows specific join?
        return new URL(urlString, baseUrlString).toString();
    }
}
exports.DefaultFetcher = DefaultFetcher;
//# sourceMappingURL=fetcher.js.map