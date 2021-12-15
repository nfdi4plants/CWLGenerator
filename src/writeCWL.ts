import * as inquirer from 'inquirer'
import fs from "fs" 
import { createMinimalInput } from './inputs'
import { createCommandInputArraySchema } from './inputs'
import { assignGlob, assignOutputBinding, createCommandOutputArraySchema, createMininmalOutput, createOutputBinding } from './outputs'
import { CommandInputArraySchema } from 'cwl-ts-auto'
import { createMinimalCommandLineTool } from './commandLineTool'
import { baseCommandText, inputCountText, inputIsArrayText, inputNameText, inputPrefixText, inputTypeText, outputCountText, outputIsArrayText, outputLocationKnownText, outputLocationText, outputNameText, outputTypeText } from './questionTexts'

console.log('CWLGenerator!')

interface Answers  {
    BaseCommand: string | undefined
    Inputs: Input[]
    Outputs: Output[]
}

interface Input {
    Name: string
    Position: number
    Prefix: string
    isArray: boolean
    Type: string
}

interface Output {
    Name: string
    isArray: boolean
    Type: string
    Location: string
}

async function askYesNo (name: string, message: string) {
    return await inquirer.prompt(
        {
            type: 'confirm',
            name: name,
            message: message
        }
    )
}

async function askChoices (name: string, message: string, choices: string[]) {
    return await inquirer.prompt(
        {
            type: 'list',
            name: name,
            message: message,
            choices: choices
        }
    )
}

async function askFreeInput (name: string, message: string) {
    return await inquirer.prompt(
        {
            type: 'input',
            name: name,
            message: message
        }
    )
}

async function askNumber (name: string, message: string) {
    return await inquirer.prompt(
        {
            type: 'input',
            name: name,
            message: message,
            validate: (answer) => {
                if (isNaN(answer)) {
                  return "please enter a number (e.g. 3)"
                }
                return true
              }
        }
    )
}

function createInputParameterFromInputs (inputs: Input[]) {
    return inputs
        .map(input => {
            if (input.isArray) {
                var inputType: string | CommandInputArraySchema = createCommandInputArraySchema(input.Type)
            } else {
                var inputType: string | CommandInputArraySchema = input.Type
            }
            return createMinimalInput(
                input.Name,
                inputType,
                input.Position,
                input.Prefix
            )
        })
}

function createOutputParameterFromOutputs (outputs: Output[]) {
    return outputs
        .map(output => {
            if (output.isArray) {
                var outputType: string | CommandInputArraySchema = createCommandOutputArraySchema(output.Type)
            } else {
                var outputType: string | CommandInputArraySchema = output.Type
            }
            let outputRes =
                createMininmalOutput(
                    output.Name,
                    outputType
                )
            let outputBinding = createOutputBinding()
            assignGlob(outputBinding, output.Location)
            assignOutputBinding(outputRes, outputBinding)
            return outputRes
        })
}

function createCommandLineToolFromAnswers (answers: Answers) {
    let inputs = createInputParameterFromInputs(answers.Inputs)
    let outputs = createOutputParameterFromOutputs(answers.Outputs)
    let baseCommand = answers.BaseCommand as string
    return createMinimalCommandLineTool(baseCommand,inputs,outputs).save()
}

async function main() {
    let allAnswers: Answers = {
        BaseCommand: undefined,
        Inputs: [],
        Outputs: []
    }

    let baseCommand = 
        await askFreeInput("BaseCommand", baseCommandText)

    allAnswers.BaseCommand = baseCommand.BaseCommand as string

    let inputCount =
        (await askNumber("InputCount", inputCountText))
            .InputCount as number

    let inputs: Input[] = []

    for (let i = 0; i < inputCount; i++) {
        console.log(`Configuring Input ${i+1}`)
        let inputName = 
            (await askFreeInput("InputName", inputNameText))
                .InputName as string
        let inputPrefix =
            (await askFreeInput("InputPrefix", inputPrefixText))
                .InputPrefix as string
        let isArray =
            (await askYesNo("isArray", inputIsArrayText))
                .isArray as boolean
        let inputType =
            (await askChoices("InputType", inputTypeText, ["string","File", "Directory", "Number"]))
                .InputType as string
        let input: Input =
            {
                Name: inputName,
                Position: i,
                Prefix: inputPrefix,
                isArray: isArray,
                Type: inputType
            }
            inputs.push(input)
        }

    allAnswers.Inputs = inputs
        
    let outputLocationKnown =
        (await askYesNo("OutputLocationKnown", outputLocationKnownText))
            .OutputLocationKnown as boolean

    let outputs: Output[] = []

    if (outputLocationKnown) {
        let outputCount = 
            (await askNumber("OutputCount", outputCountText))
                .OutputCount as number
        for (let i = 0; i < outputCount; i++) {
            console.log(`Configuring Output ${i+1}`)
            let outputName =
                (await askFreeInput("OutputName", outputNameText))
                    .OutputName as string
            let isArray =
                (await askYesNo("isArray", outputIsArrayText))
                    .isArray as boolean
            let outputType =
                (await askChoices("OutputType", outputTypeText, ["File", "Directory", "stdout"]))
                    .OutputType as string
            let outputLocation =
                (await askFreeInput("OutputLocation", outputLocationText))
                    .OutputLocation as string
            let output: Output =
                {
                    Name: outputName,
                    isArray: isArray,
                    Type: outputType,
                    Location: outputLocation
                }

            outputs.push(output)
        }
    } else {
        let output: Output =
            {
                Name: "WorkingDirectory",
                isArray: false,
                Type: "Directory",
                Location: "./"
            }

        outputs.push(output)
    }
    
    allAnswers.Outputs = outputs

    return (createCommandLineToolFromAnswers(allAnswers))
}

main().then((res) => fs.writeFileSync("./test.cwl", JSON.stringify(res)))