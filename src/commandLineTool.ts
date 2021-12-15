import * as cwltsauto from 'cwl-ts-auto'

export function createMinimalCommandLineTool (baseCommand: string | string[], inputs: cwltsauto.CommandInputParameter[], outputs: cwltsauto.CommandOutputParameter[]) {
    return new cwltsauto.CommandLineTool({
        class_: "CommandLineTool",
        inputs: inputs,
        outputs: outputs,
        cwlVersion: "v1.2",
        baseCommand: baseCommand
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function assignLabel (cmd: cwltsauto.CommandLineTool, label: string): void {
    cmd.label = label
}

export function assignDoc (cmd: cwltsauto.CommandLineTool, doc: string | string[]): void {
    cmd.doc = doc
}

export function assignRequirements (cmd: cwltsauto.CommandLineTool, requirements: (cwltsauto.InlineJavascriptRequirement | cwltsauto.SchemaDefRequirement | cwltsauto.LoadListingRequirement | cwltsauto.DockerRequirement | cwltsauto.SoftwareRequirement | cwltsauto.InitialWorkDirRequirement | cwltsauto.EnvVarRequirement | cwltsauto.ShellCommandRequirement | cwltsauto.ResourceRequirement | cwltsauto.WorkReuse | cwltsauto.NetworkAccess | cwltsauto.InplaceUpdateRequirement | cwltsauto.ToolTimeLimit | cwltsauto.SubworkflowFeatureRequirement | cwltsauto.ScatterFeatureRequirement | cwltsauto.MultipleInputFeatureRequirement | cwltsauto.StepInputExpressionRequirement)[]): void {
    cmd.requirements = requirements
}

export function assignHints (cmd: cwltsauto.CommandLineTool, hints: any[]): void {
    cmd.hints = hints
}

export function assignIntent (cmd: cwltsauto.CommandLineTool, intent: string[]): void {
    cmd.intent = intent
}

export function assignArguments (cmd: cwltsauto.CommandLineTool, arguments_: (string | cwltsauto.CommandLineBinding)[]): void {
    cmd.arguments_ = arguments_
}

export function assignStdin (cmd: cwltsauto.CommandLineTool, stdin: string): void {
    cmd.stdin = stdin
}

export function assignStderr (cmd: cwltsauto.CommandLineTool, stderr: string): void {
    cmd.stderr = stderr
}

export function assignStdout (cmd: cwltsauto.CommandLineTool, stdout: string): void {
    cmd.stdout = stdout
}

export function assignSuccessCodes (cmd: cwltsauto.CommandLineTool, successCodes: number[]): void {
    cmd.successCodes = successCodes
}

export function assignTemporaryFailCodes (cmd: cwltsauto.CommandLineTool, temporaryFailCodes: number[]): void {
    cmd.temporaryFailCodes = temporaryFailCodes
}

export function assignPermanentFailCodes (cmd: cwltsauto.CommandLineTool, permanentFailCodes: number[]): void {
    cmd.permanentFailCodes = permanentFailCodes
}