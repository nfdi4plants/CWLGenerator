"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDictionary = exports.Undefined = exports.String = exports.Bool = exports.Float = exports.Int = void 0;
function Int(doc) {
    return typeof doc === 'number' && Number.isInteger(doc);
}
exports.Int = Int;
function Float(doc) {
    return typeof doc === 'number';
}
exports.Float = Float;
function Bool(doc) {
    return typeof doc === 'boolean';
}
exports.Bool = Bool;
function String(doc) {
    return typeof doc === 'string';
}
exports.String = String;
function Undefined(doc) {
    return typeof doc === 'undefined';
}
exports.Undefined = Undefined;
function isDictionary(doc) {
    return (doc != null && typeof doc === 'object' && !Array.isArray(doc));
}
exports.isDictionary = isDictionary;
//# sourceMappingURL=typeguards.js.map