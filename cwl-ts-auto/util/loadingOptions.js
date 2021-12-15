"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingOptions = void 0;
const internal_1 = require("./internal");
class LoadingOptions {
    constructor({ fileUri, namespaces, schemas, originalDoc, copyFrom, fetcher }) {
        this.idx = {};
        this.fileUri = fileUri;
        this.namespaces = namespaces;
        this.schemas = schemas;
        this.originalDoc = originalDoc;
        if (copyFrom != null) {
            this.idx = copyFrom.idx;
            if (fetcher === undefined) {
                this.fetcher = copyFrom.fetcher;
            }
            if (fileUri === undefined) {
                this.fileUri = copyFrom.fileUri;
            }
            if (namespaces === undefined) {
                this.namespaces = copyFrom.namespaces;
            }
            if (schemas === undefined) {
                this.schemas = copyFrom.schemas;
            }
        }
        if (fetcher != null) {
            this.fetcher = fetcher;
        }
        else {
            this.fetcher = new internal_1.DefaultFetcher();
        }
        this.vocab = internal_1.VOCAB;
        this.rvocab = internal_1.RVOCAB;
        if (namespaces != null) {
            this.vocab = Object.assign({}, this.vocab);
            this.rvocab = Object.assign({}, this.rvocab);
            for (const key in namespaces) {
                const value = namespaces[key];
                this.vocab[key] = value;
                this.rvocab[value] = key;
            }
        }
    }
}
exports.LoadingOptions = LoadingOptions;
//# sourceMappingURL=loadingOptions.js.map