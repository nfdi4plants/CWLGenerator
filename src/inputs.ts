import * as cwltsauto from 'cwl-ts-auto'

export function createMinimalInput (name: string, type: string, position: number, prefix: string): cwltsauto.CommandInputParameter {
    let binding = createBinding(position,prefix)
    return new cwltsauto.CommandInputParameter({
        id: name,
        doc: undefined,
        type: type,
        label: undefined,
        secondaryFiles: undefined,
        streamable: undefined,
        format: undefined,
        loadContents: undefined,
        loadListing: undefined,
        inputBinding: binding,
        default_: undefined
    })
}

function createBinding (position: number, prefix: string): cwltsauto.CommandLineBinding {
    return new cwltsauto.CommandLineBinding({
            loadContents: false,
            position: position,
            prefix: prefix,
            separate: undefined,
            itemSeparator: undefined,
            valueFrom: undefined,
            shellQuote: undefined
    })
}

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


