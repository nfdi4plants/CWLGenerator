#!/usr/bin/env node

import * as inquirer from 'inquirer'
import fs from "fs" 
import { createMinimalInput } from './inputs'
import { createCommandInputArraySchema } from './inputs'
import { assignGlob, assignOutputBinding, createCommandOutputArraySchema, createMininmalOutput, createOutputBinding } from './outputs'
import { CommandInputArraySchema } from 'cwl-ts-auto'
import { assignStdout, createMinimalCommandLineTool } from './commandLineTool'
import { baseCommandText, inputCountText, inputIsArrayText, inputNameText, inputPrefixText, inputTypeText, outputCountText, outputIsArrayText, outputLocationKnownText, outputLocationText, outputNameText, outputTypeText, stdoutText, toolNameText } from './questionTexts'
import { stdout } from 'process'

console.log('CWLGenerator!')

interface Answers  {
    BaseCommand: string[] | undefined
    Stdout: string | undefined
    Inputs: Input[]
    Outputs: Output[]
    Requirements: string[]
    Hints: Requirement[]
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
    Location: string | undefined
}

interface Requirement {
    InlineJavascript: boolean
    SchemaDef: boolean
    LoadListing: boolean
    Docker: boolean
    Software: boolean
    InitialWorkDir: boolean
    EnvVar: boolean
    ShellCommand: boolean
    Resource: boolean
    WorkReuse: boolean
    NetworkAccess: boolean
    InplaceUpdate: boolean
    ToolTimeLimit: boolean
    SubworkflowFeature: boolean
    ScatterFeature: boolean
    MultipleInputFeature: boolean
    StepInputExpression: boolean
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

async function askCheckbox (name: string, message: string, choices: string[]) {
    return await inquirer.prompt(
        {
            type: 'checkbox',
            name: name,
            message: message,
            choices: choices
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
            if (output.Location != undefined){
                assignGlob(outputBinding, output.Location)
                assignOutputBinding(outputRes, outputBinding)
            }
            return outputRes
        })
}

function createCommandLineToolFromAnswers (answers: Answers) {
    let inputs = createInputParameterFromInputs(answers.Inputs)
    let outputs = createOutputParameterFromOutputs(answers.Outputs)
    let baseCommand = answers.BaseCommand as string[]
    let cmd = createMinimalCommandLineTool(baseCommand,inputs,outputs)
    if (answers.Stdout != undefined) {
        assignStdout(cmd,answers.Stdout)
    }
    return cmd.save()
}

async function main() {
    let allAnswers: Answers = {
        BaseCommand: undefined,
        Stdout: undefined,
        Inputs: [],
        Outputs: [],
        Requirements: [],
        Hints: []
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let baseCommand = 
        (
            (await askFreeInput("BaseCommand", baseCommandText))
                .BaseCommand as string
        ).split(" ")

    allAnswers.BaseCommand = baseCommand

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            if (outputType != "stdout") {
                let outputLocation =
                    (await askFreeInput("OutputLocation", outputLocationText))
                        .OutputLocation as string
                let output: Output =
                    {
                        Name: outputName,
                        isArray: isArray,
                        Type: outputType,
                        Location: "$(runtime.outdir)" + outputLocation
                    }
                outputs.push(output)
                }
            else {
                
                let stdoutName =
                    (await askFreeInput("Stdout", stdoutText))
                        .Stdout as string
                        
                let output: Output =
                    {
                        Name: outputName,
                        isArray: isArray,
                        Type: outputType,
                        Location: undefined
                    }
                outputs.push(output)
                allAnswers.Stdout = stdoutName
            }

        }
    } else {
        let output: Output =
            {
                Name: "WorkingDirectory",
                isArray: false,
                Type: "Directory",
                Location: "$(runtime.outdir)"
            }
        outputs.push(output)
    }
    
    allAnswers.Outputs = outputs

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // let requirementsNeeded =
    //     (await askYesNo("RequirementsNeeded", "Do you need additional requirements to run your workflow?"))
    //         .RequirementsNeeded as boolean
    // if (requirementsNeeded) {
    //     let requirements =
    //         (
    //             await askCheckbox(
    //                     "RequirementsList",
    //                     "Please check the required Requirements",
    //                     [
    //                         "InlineJavascriptRequirement",
    //                         "SchemaDefRequirement",
    //                         "LoadListingRequirement",
    //                         "DockerRequirement",
    //                         "SoftwareRequirement",
    //                         "InitialWorkDirRequirement",
    //                         "EnvVarRequirement",
    //                         "ShellCommandRequirement",
    //                         "ResourceRequirement",
    //                         "WorkReuse",
    //                         "NetworkAccess",
    //                         "InplaceUpdateRequirement",
    //                         "ToolTimeLimit",
    //                         "SubworkflowFeatureRequirement",
    //                         "ScatterFeatureRequirement",
    //                         "MultipleInputFeatureRequirement",
    //                         "StepInputExpressionRequirement"
    //                     ]
    //             )
    //         ).RequirementsList as string[]
    //     allAnswers.Requirements = requirements
    //     console.log(allAnswers.Requirements)
    // }

    return (createCommandLineToolFromAnswers(allAnswers))
}

async function name () {
    let toolName =
        (await askFreeInput("ToolName", toolNameText))
            .ToolName as string
    return toolName
}

main().then((res) => {
    name().then(n => {
        fs.writeFileSync(`./${n}.cwl`, JSON.stringify(res))
    })
})