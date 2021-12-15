import * as cwltsauto from 'cwl-ts-auto'

type CWLOutputType =
    | string 
    | cwltsauto.CommandOutputRecordSchema 
    | cwltsauto.CommandOutputEnumSchema 
    | cwltsauto.CommandOutputArraySchema

export function createMininmalOutput (name: string, type: CWLOutputType | CWLOutputType[]): cwltsauto.CommandOutputParameter{
    return new cwltsauto.CommandOutputParameter({
        id: name,
        type: type
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function assignLabel (output: cwltsauto.CommandOutputParameter, label: string): void {
    output.label = label
}

export function assignSecondaryFiles (output: cwltsauto.CommandOutputParameter, secondaryFiles: cwltsauto.SecondaryFileSchema | cwltsauto.SecondaryFileSchema[]): void {
    output.secondaryFiles = secondaryFiles
}

export function assignStreamable (output: cwltsauto.CommandOutputParameter, streamable: boolean): void {
    output.streamable = streamable
}

export function assignDoc (output: cwltsauto.CommandOutputParameter, doc: string | string[]): void {
    output.doc = doc
}

export function assignFormat (output: cwltsauto.CommandOutputParameter, format: string): void {
    output.format = format
}

export function assignOutputBinding (output: cwltsauto.CommandOutputParameter, outputBinding: cwltsauto.CommandOutputBinding): void {
    output.outputBinding = outputBinding
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function createOutputBinding (): cwltsauto.CommandOutputBinding {
    return new cwltsauto.CommandOutputBinding({
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function assignLoadContents (outputBinding: cwltsauto.CommandOutputBinding, loadContents: boolean): void {
    outputBinding.loadContents = loadContents
}

export function assignLoadListing (outputBinding: cwltsauto.CommandOutputBinding, loadListing: string): void {
    outputBinding.loadListing = loadListing
}

export function assignGlob (outputBinding: cwltsauto.CommandOutputBinding, glob: string | string[]): void {
    outputBinding.glob = glob
}

export function assignOutputEval (outputBinding: cwltsauto.CommandOutputBinding, outputEval: string): void {
    outputBinding.outputEval = outputEval
}