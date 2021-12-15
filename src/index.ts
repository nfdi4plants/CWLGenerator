import * as inquirer from 'inquirer'
import fs from "fs" 
import { createMinimalCommandLineTool } from './commandLineTool'
import { createMinimalInput } from './inputs'
import { createMininmalOutput } from './outputs'
import { json } from 'node:stream/consumers'

console.log('CWLGenerator!')

interface Answers  {
    BaseCommand: any
    Inputs: any[]
    Outputs: any[]
    OutputBindings : any[]
}

async function generateInputs(count: number) {
    let allInputs = []
    for(let i = 0; i < count; i++) {
        console.log(`Configuring Input ${i+1}`)
        let answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'inputname',
                message: "What is the name of the input?",
            },
            {
                type: 'confirm',
                name: 'isArray',
                message: "Is your input a list of things?",
            },
            {
                type: 'list',
                name: 'inputType',
                message: "What is the type of the input?",
                choices: ["string","File", "Directory", "Number"]
            }
        ])
        allInputs.push(answers)
    }
    return allInputs
}

async function followUpFolder (n: number) {
    console.log(`Configuring Output ${n}`)
    let answer =
        await inquirer.prompt([
            {
                type: 'input',
                name: 'outputname',
                message: "What is the name of the output?",
            },
            {
                type: 'input',
                name: 'outputbinding',
                message: `In which folder does the tool return your output ${n} (only the folder name)?`,
            },
            {
                type: 'confirm',
                name: 'isArray',
                message: "Is your output a list of things?",
            },
            {
                type: 'list',
                name: 'outputType',
                message: "What is the type of the output?",
                choices: ["File", "Directory", "stdout"]
            }
        ])
    return answer
}

async function main() {
    let allanswers: Answers = {
        BaseCommand: undefined,
        Inputs: [],
        Outputs: [],
        OutputBindings: []
    }
    let answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'basecommand',
            message: "What is the basecommand to run your tool (e.g. samtools view)",
        }, 
        {
            type: 'input',
            name: 'inputCount',
            message: "How many inputs does your tool have?",
        },
        {
            type: 'input',
            name: 'outputCount',
            message: "How many outputs does your tool have?",
        },
        {
            type: 'confirm',
            name: `outputKnown`,
            message: "Do you know where your outputs will be placed?",
        }
    ])

    let inputs = await generateInputs(answers.inputCount)
    if (answers.outputKnown) {
        for(let i = 0; i < answers.outputCount; i++) {
            let res = await followUpFolder(i+1)
            console.log(res)
            allanswers.OutputBindings.push(
                {
                    OutputName: res.outputname,
                    Binding: res.outputbinding,
                    isArray: res.isArray,
                    OutputType: res.outputType
                }
            )
        }
    } else {
        allanswers.OutputBindings.push(
            {
                OutputName: "WorkingDirectory",
                Binding:"./",
                isArray: false,
                OutputType: "Directory"
            }
        )
    }

    allanswers.BaseCommand = answers.basecommand
    allanswers.Inputs = inputs

    let inputsRes =
        allanswers.Inputs
            .map((input, index) => {
                return createMinimalInput(input.inputname, input.inputtype, index, "")
            })
    console.log(allanswers.OutputBindings)
    let outputsRes =
        allanswers.OutputBindings
            .map((output,index) => {
                return createMininmalOutput(output.OutputName, output.OutputType)
            })

    let consoleTool =
            createMinimalCommandLineTool(allanswers.BaseCommand, inputsRes, outputsRes)

    return consoleTool.save()
}

main().then((result)=> {fs.writeFileSync("./test.cwl", JSON.stringify(result))})