import * as cwltsauto from 'cwl-ts-auto'

type CWLInputType =
    | string 
    | cwltsauto.CommandInputRecordSchema 
    | cwltsauto.CommandInputEnumSchema 
    | cwltsauto.CommandInputArraySchema 

type InputSchema =
    |string
    | cwltsauto.CommandInputArraySchema
    | cwltsauto.CommandInputRecordSchema
    | cwltsauto.CommandInputEnumSchema

export function createMinimalInput (name: string, type: CWLInputType | CWLInputType[], position: number, prefix: string): cwltsauto.CommandInputParameter {
    let binding = createBinding(position,prefix)
    return new cwltsauto.CommandInputParameter({
        id: name,
        type: type,
        inputBinding: binding,
        extensionFields: undefined,
        loadingOptions: undefined
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function assignDoc (input: cwltsauto.CommandInputParameter, doc: string | string[]): void {
    input.doc = doc
}

export function assignLabel (input: cwltsauto.CommandInputParameter, label: string): void {
    input.label = label
}

export function assignSecondaryFiles (input: cwltsauto.CommandInputParameter, secondaryFiles: cwltsauto.SecondaryFileSchema | cwltsauto.SecondaryFileSchema[]): void {
    input.secondaryFiles = secondaryFiles
}

export function assignStreamable (input: cwltsauto.CommandInputParameter, streamable: boolean): void {
    input.streamable = streamable
}

export function assignFormat (input: cwltsauto.CommandInputParameter, format: string | string[]): void {
    input.format = format
}

export function assignLoadContents (input: cwltsauto.CommandInputParameter, loadContents: boolean): void {
    input.loadContents = loadContents
}

export function assignLoadListing (input: cwltsauto.CommandInputParameter, loadListing: string): void {
    input.loadListing = loadListing
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createBinding (position: number, prefix: string): cwltsauto.CommandLineBinding {
    return new cwltsauto.CommandLineBinding({
            loadContents: false,
            position: position,
            prefix: prefix
    })
}

export function createCommandInputArraySchema (items: InputSchema): cwltsauto.CommandInputArraySchema {
    return new cwltsauto.CommandInputArraySchema({
        items: items,
        type: `array`
    })
}

