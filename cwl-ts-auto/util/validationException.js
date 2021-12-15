"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
class ValidationException extends Error {
    constructor(message, _children = new Array()) {
        super(message);
        this.bullet = '';
        Object.setPrototypeOf(this, new.target.prototype);
        const children = new Array();
        for (const child of _children) {
            children.push(...child.simplify());
        }
        this.children = children;
    }
    withBullet(bullet) {
        this.bullet = bullet;
        return this;
    }
    simplify() {
        if (this.toString().length > 0) {
            return new Array(this);
        }
        return this.children;
    }
    summary(level) {
        const spaces = new Array(level * ValidationException.indentPerLevel).join(' ');
        return spaces + this.bullet + this.message;
    }
    prettyStr(level = 0) {
        const parts = new Array();
        let nextLevel = level;
        if (this.message != null && this.message.length > 0) {
            parts.push(this.summary(level));
            nextLevel++;
        }
        for (const child of this.children) {
            parts.push(child.prettyStr(nextLevel));
        }
        const ret = parts.join('\n');
        return ret;
    }
    toString() {
        return this.prettyStr();
    }
}
exports.ValidationException = ValidationException;
ValidationException.indentPerLevel = 2;
//# sourceMappingURL=validationException.js.map