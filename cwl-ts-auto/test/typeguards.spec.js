"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const internal_1 = require("../util/internal");
describe('Test Typeguards', () => {
    describe('Int', () => {
        it('Should return true', () => {
            chai_1.assert.equal(internal_1.TypeGuards.Int(2), true);
            chai_1.assert.equal(internal_1.TypeGuards.Int(0), true);
        });
        it('Should return false', () => {
            chai_1.assert.equal(internal_1.TypeGuards.Int(2.2), false);
            chai_1.assert.equal(internal_1.TypeGuards.Int('2.2'), false);
            chai_1.assert.equal(internal_1.TypeGuards.Int([2]), false);
            chai_1.assert.equal(internal_1.TypeGuards.Int({}), false);
            chai_1.assert.equal(internal_1.TypeGuards.Int(null), false);
            chai_1.assert.equal(internal_1.TypeGuards.Int(undefined), false);
        });
    });
    describe('Float', () => {
        it('Should return true', () => {
            chai_1.assert.equal(internal_1.TypeGuards.Float(2.0), true);
            chai_1.assert.equal(internal_1.TypeGuards.Float(2), true);
            chai_1.assert.equal(internal_1.TypeGuards.Float(0), true);
        });
        it('Should return false', () => {
            chai_1.assert.equal(internal_1.TypeGuards.Float([2]), false);
            chai_1.assert.equal(internal_1.TypeGuards.Float('2.2'), false);
            chai_1.assert.equal(internal_1.TypeGuards.Float({}), false);
            chai_1.assert.equal(internal_1.TypeGuards.Float(null), false);
            chai_1.assert.equal(internal_1.TypeGuards.Float(undefined), false);
        });
    });
    describe('Bool', () => {
        it('Should return true', () => {
            chai_1.assert.equal(internal_1.TypeGuards.Bool(true), true);
            chai_1.assert.equal(internal_1.TypeGuards.Bool(false), true);
        });
        it('Should return false', () => {
            chai_1.assert.equal(internal_1.TypeGuards.Bool([1]), false);
            chai_1.assert.equal(internal_1.TypeGuards.Bool('1'), false);
            chai_1.assert.equal(internal_1.TypeGuards.Bool(1), false);
            chai_1.assert.equal(internal_1.TypeGuards.Bool({}), false);
            chai_1.assert.equal(internal_1.TypeGuards.Bool(null), false);
            chai_1.assert.equal(internal_1.TypeGuards.Bool(undefined), false);
        });
    });
    describe('String', () => {
        it('Should return true', () => {
            chai_1.assert.equal(internal_1.TypeGuards.String('2.2'), true);
            chai_1.assert.equal(internal_1.TypeGuards.String(''), true);
            chai_1.assert.equal(internal_1.TypeGuards.String('test'), true);
        });
        it('Should return false', () => {
            chai_1.assert.equal(internal_1.TypeGuards.String([2]), false);
            chai_1.assert.equal(internal_1.TypeGuards.String(2), false);
            chai_1.assert.equal(internal_1.TypeGuards.String({}), false);
            chai_1.assert.equal(internal_1.TypeGuards.String(null), false);
            chai_1.assert.equal(internal_1.TypeGuards.String(undefined), false);
        });
    });
    describe('Undefined', () => {
        it('Should return true', () => {
            chai_1.assert.equal(internal_1.TypeGuards.Undefined(undefined), true);
        });
        it('Should return false', () => {
            chai_1.assert.equal(internal_1.TypeGuards.Undefined([1]), false);
            chai_1.assert.equal(internal_1.TypeGuards.Undefined('1'), false);
            chai_1.assert.equal(internal_1.TypeGuards.Undefined(1), false);
            chai_1.assert.equal(internal_1.TypeGuards.Undefined(1.1), false);
            chai_1.assert.equal(internal_1.TypeGuards.Undefined({}), false);
            chai_1.assert.equal(internal_1.TypeGuards.Undefined(null), false);
        });
    });
    describe('Dictionary', () => {
        it('Should return true', () => {
            chai_1.assert.equal(internal_1.TypeGuards.isDictionary({}), true);
            chai_1.assert.equal(internal_1.TypeGuards.isDictionary({ test: 'test' }), true);
        });
        it('Should return false', () => {
            chai_1.assert.equal(internal_1.TypeGuards.isDictionary([]), false);
            chai_1.assert.equal(internal_1.TypeGuards.isDictionary('1'), false);
            chai_1.assert.equal(internal_1.TypeGuards.isDictionary(1), false);
            chai_1.assert.equal(internal_1.TypeGuards.isDictionary(1.1), false);
            chai_1.assert.equal(internal_1.TypeGuards.isDictionary(undefined), false);
            chai_1.assert.equal(internal_1.TypeGuards.isDictionary(null), false);
        });
    });
});
//# sourceMappingURL=typeguards.spec.js.map