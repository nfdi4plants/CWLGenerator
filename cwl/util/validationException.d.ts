export declare class ValidationException extends Error {
    static indentPerLevel: number;
    children: ValidationException[];
    bullet: string;
    constructor(message: string);
    constructor(message: string, _children: ValidationException[]);
    withBullet(bullet: string): ValidationException;
    simplify(): ValidationException[];
    summary(level: number): string;
    prettyStr(level?: number): string;
    toString(): string;
}
