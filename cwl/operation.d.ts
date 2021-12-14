import { Dictionary, LoadingOptions, Saveable } from './util/internal';
import * as Internal from './util/internal';
/**
 * Auto-generated class implementation for https://w3id.org/cwl/cwl#Operation
 *
 * This record describes an abstract operation.  It is a potential
 * step of a workflow that has not yet been bound to a concrete
 * implementation.  It specifies an input and output signature, but
 * does not provide enough information to be executed.  An
 * implementation (or other tooling) may provide a means of binding
 * an Operation to a concrete process (such as Workflow,
 * CommandLineTool, or ExpressionTool) with a compatible signature.
 *
 */
export declare class Operation extends Saveable implements Internal.Process {
    loadingOptions: LoadingOptions;
    extensionFields?: Dictionary<any>;
    /**
     * The unique identifier for this object.
     */
    id: undefined | string;
    class_: string;
    /**
     * A short, human-readable label of this object.
     */
    label: undefined | string;
    /**
     * A documentation string for this object, or an array of strings which should be concatenated.
     */
    doc: undefined | string | Array<string>;
    /**
     * Defines the input parameters of the process.  The process is ready to
     * run when all required input parameters are associated with concrete
     * values.  Input parameters include a schema for each parameter which is
     * used to validate the input object.  It may also be used to build a user
     * interface for constructing the input object.
     *
     * When accepting an input object, all input parameters must have a value.
     * If an input parameter is missing from the input object, it must be
     * assigned a value of `null` (or the value of `default` for that
     * parameter, if provided) for the purposes of validation and evaluation
     * of expressions.
     *
     */
    inputs: Array<Internal.OperationInputParameter>;
    /**
     * Defines the parameters representing the output of the process.  May be
     * used to generate and/or validate the output object.
     *
     */
    outputs: Array<Internal.OperationOutputParameter>;
    /**
     * Declares requirements that apply to either the runtime environment or the
     * workflow engine that must be met in order to execute this process.  If
     * an implementation cannot satisfy all requirements, or a requirement is
     * listed which is not recognized by the implementation, it is a fatal
     * error and the implementation must not attempt to run the process,
     * unless overridden at user option.
     *
     */
    requirements: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement>;
    /**
     * Declares hints applying to either the runtime environment or the
     * workflow engine that may be helpful in executing this process.  It is
     * not an error if an implementation cannot satisfy all hints, however
     * the implementation may report a warning.
     *
     */
    hints: undefined | Array<any>;
    /**
     * CWL document version. Always required at the document root. Not
     * required for a Process embedded inside another Process.
     *
     */
    cwlVersion: undefined | string;
    /**
     * An identifier for the type of computational operation, of this Process.
     * Especially useful for "class: Operation", but can also be used for
     * CommandLineTool, Workflow, or ExpressionTool.
     *
     * If provided, then this must be an IRI of a concept node that
     * represents the type of operation, preferrably defined within an ontology.
     *
     * For example, in the domain of bioinformatics, one can use an IRI from
     * the EDAM Ontology's [Operation concept nodes](http://edamontology.org/operation_0004),
     * like [Alignment](http://edamontology.org/operation_2928),
     * or [Clustering](http://edamontology.org/operation_3432); or a more
     * specific Operation concept like
     * [Split read mapping](http://edamontology.org/operation_3199).
     *
     */
    intent: undefined | Array<string>;
    constructor({ extensionFields, loadingOptions, id, class_, label, doc, inputs, outputs, requirements, hints, cwlVersion, intent }: {
        extensionFields?: Dictionary<any>;
        loadingOptions?: LoadingOptions;
        id: undefined | string;
        label: undefined | string;
        doc: undefined | string | Array<string>;
        inputs: Array<Internal.OperationInputParameter>;
        outputs: Array<Internal.OperationOutputParameter>;
        requirements: undefined | Array<Internal.InlineJavascriptRequirement | Internal.SchemaDefRequirement | Internal.LoadListingRequirement | Internal.DockerRequirement | Internal.SoftwareRequirement | Internal.InitialWorkDirRequirement | Internal.EnvVarRequirement | Internal.ShellCommandRequirement | Internal.ResourceRequirement | Internal.WorkReuse | Internal.NetworkAccess | Internal.InplaceUpdateRequirement | Internal.ToolTimeLimit | Internal.SubworkflowFeatureRequirement | Internal.ScatterFeatureRequirement | Internal.MultipleInputFeatureRequirement | Internal.StepInputExpressionRequirement>;
        hints: undefined | Array<any>;
        cwlVersion: undefined | string;
        intent: undefined | Array<string>;
        class_: string;
    });
    /**
     * Used to construct instances of {@link Operation }.
     *
     * @param __doc                           Document fragment to load this record object from.
     * @param baseuri                         Base URI to generate child document IDs against.
     * @param loadingOptions                  Context for loading URIs and populating objects.
     * @param docRoot                         ID at this position in the document (if available)
     * @returns                               An instance of {@link Operation }
     * @throws {@link ValidationException}    If the document fragment is not a
     *                                        {@link Dictionary} or validation of fields fails.
     */
    static fromDoc(__doc: any, baseuri: string, loadingOptions: LoadingOptions, docRoot?: string): Promise<Saveable>;
    save(top?: boolean, baseUrl?: string, relativeUris?: boolean): Dictionary<any>;
    static attr: Set<string>;
}
