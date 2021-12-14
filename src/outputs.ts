import * as cwltsauto from 'cwl-ts-auto'

export function createMininmalOutput (name: string, type: string): cwltsauto.CommandOutputParameter{
    return new cwltsauto.CommandOutputParameter({
        id: name,
        label: undefined,
        secondaryFiles: undefined,
        streamable: undefined,
        doc: undefined,
        format: undefined,
        type: type,
        outputBinding: undefined,
    })
}

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