import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#WorkflowOutputParameter
 *
 * Describe an output parameter of a workflow.  The parameter must be
 * connected to one or more parameters defined in the workflow that
 * will provide the value of the output parameter. It is legal to
 * connect a WorkflowInputParameter to a WorkflowOutputParameter.
 *
 * See [WorkflowStepInput](#WorkflowStepInput) for discussion of
 * `linkMerge` and `pickValue`.
 *
 */
export declare class WorkflowOutputParameter extends Saveable implements Internal.OutputParameter {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * The unique identifier for this object.
     */
    id?: undefined | string;
    /**
     * A short, human-readable label of this object.
     */
    label?: undefined | string;
    /**
     * Only valid when `type: File` or is an array of `items: File`.
     *
     * Provides a pattern or expression specifying files or
     * directories that should be included alongside the primary
     * file.  Secondary files may be required or optional.  When not
     * explicitly specified, secondary files specified for `inputs`
     * are required and `outputs` are optional.  An implementation
     * must include matching Files and Directories in the
     * `secondaryFiles` property of the primary file.  These Files
     * and Directories must be transferred and staged alongside the
     * primary file.  An implementation may fail workflow execution
     * if a required secondary file does not exist.
     *
     * If the value is an expression, the value of `self` in the expression
     * must be the primary input or output File object to which this binding
     * applies.  The `basename`, `nameroot` and `nameext` fields must be
     * present in `self`.  For `CommandLineTool` outputs the `path` field must
     * also be present.  The expression must return a filename string relative
     * to the path to the primary File, a File or Directory object with either
     * `path` or `location` and `basename` fields set, or an array consisting
     * of strings or File or Directory objects.  It is legal to reference an
     * unchanged File or Directory object taken from input as a secondaryFile.
     * The expression may return "null" in which case there is no secondaryFile
     * from that expression.
     *
     * To work on non-filename-preserving storage systems, portable tool
     * descriptions should avoid constructing new values from `location`, but
     * should construct relative references using `basename` or `nameroot`
     * instead.
     *
     * If a value in `secondaryFiles` is a string that is not an expression,
     * it specifies that the following pattern should be applied to the path
     * of the primary file to yield a filename relative to the primary File:
     *
     *   1. If string ends with `?` character, remove the last `?` and mark
     *     the resulting secondary file as optional.
     *   2. If string begins with one or more caret `^` characters, for each
     *     caret, remove the last file extension from the path (the last
     *     period `.` and all following characters).  If there are no file
     *     extensions, the path is unchanged.
     *   3. Append the remainder of the string to the end of the file path.
     *
     */
    secondaryFiles?: undefined | Internal.SecondaryFileSchema | Array<Internal.SecondaryFileSchema>;
    /**
     * Only valid when `type: File` or is an array of `items: File`.
     *
     * A value of `true` indicates that the file is read or written
     * sequentially without seeking.  An implementation may use this flag to
     * indicate whether it is valid to stream file contents using a named
     * pipe.  Default: `false`.
     *
     */
    streamable?: undefined | boolean;
    /**
     * A documentation string for this object, or an array of strings which should be concatenated.
     */
    doc?: undefined | string | Array<string>;
    /**
     * Only valid when `type: File` or is an array of `items: File`.
     *
     * This is the file format that will be assigned to the output
     * File object.
     *
     */
    format?: undefined | string;
    /**
     * Specifies one or more workflow parameters that supply the value of to
     * the output parameter.
     *
     */
    outputSource?: undefined | string | Array<string>;
    /**
     * The method to use to merge multiple sources into a single array.
     * If not specified, the default method is "merge_nested".
     *
     */
    linkMerge?: undefined | string;
    /**
     * The method to use to choose non-null elements among multiple sources.
     *
     */
    pickValue?: undefined | string;
    /**
     * Specify valid types of data that may be assigned to this parameter.
     *
     */
    type: string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | Array<string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema>;
    constructor({ extensionFields, loadingOptions, id, label, secondaryFiles, streamable, doc, format, outputSource, linkMerge, pickValue, type }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        label?: undefined | string;
        secondaryFiles?: undefined | Internal.SecondaryFileSchema | Array<Internal.SecondaryFileSchema>;
        streamable?: undefined | boolean;
        doc?: undefined | string | Array<string>;
        id?: undefined | string;
        format?: undefined | string;
        outputSource?: undefined | string | Array<string>;
        linkMerge?: undefined | string;
        pickValue?: undefined | string;
        type: string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema | Array<string | Internal.OutputRecordSchema | Internal.OutputEnumSchema | Internal.OutputArraySchema>;
    });
    /**
     * Used to construct instances of {@link WorkflowOutputParameter }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link WorkflowOutputParameter }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
