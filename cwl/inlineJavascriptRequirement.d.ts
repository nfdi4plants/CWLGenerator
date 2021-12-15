import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#InlineJavascriptRequirement
 *
 * Indicates that the workflow platform must support inline Javascript expressions.
 * If this requirement is not present, the workflow platform must not perform expression
 * interpolatation.
 *
 */
export declare class InlineJavascriptRequirement extends Saveable implements Internal.ProcessRequirement {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * Always 'InlineJavascriptRequirement'
     */
    class_: string;
    /**
     * Additional code fragments that will also be inserted
     * before executing the expression code.  Allows for function definitions that may
     * be called from CWL expressions.
     *
     */
    expressionLib?: undefined | Array<string>;
    constructor({ extensionFields, loadingOptions, class_, expressionLib }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        class_: string;
        expressionLib?: undefined | Array<string>;
    });
    /**
     * Used to construct instances of {@link InlineJavascriptRequirement }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link InlineJavascriptRequirement }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
