import * as inquirer from 'inquirer'
import fs from "fs" 

console.log('CWLGenerator!')

interface Answers  {
    BaseCommand: string | undefined
    Inputs: Input []
    Outputs: any[]
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

async function main() {
    let allAnswers: Answers = {
        BaseCommand: undefined,
        Inputs: [],
        Outputs: []
    }

    let baseCommand = 
        await askFreeInput("BaseCommand", "What is the basecommand to run your tool (e.g. samtools view)")

    allAnswers.BaseCommand = baseCommand.BaseCommand as string

    let inputCount =
        (await askFreeInput("InputCount", "How many inputs does your tool have?"))
            .InputCount as number

    let inputs: Input[] = []

    for (let i = 0; i < inputCount; i++) {
        console.log(`Configuring Input ${i+1}`)
        let inputName = 
            (await askFreeInput("InputName", "What is the name of the input?"))
                .InputName as string
        let inputPrefix =
            (await askFreeInput("InputPrefix", "What is the command prefix for your input (press Enter if there is none)"))
                .InputPrefix as string
        let isArray =
            (await askYesNo("isArray", "is your input a list of things"))
                .isArray as boolean
        let inputType =
            (await askChoices("InputType", "What is the type of the input?", ["string","File", "Directory", "Number"]))
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
        (await askYesNo("OutputLocationKnown", "Do you know the location of your output?"))
            .OutputLocationKnown as boolean

    let outputs: Output[] = []

    if (outputLocationKnown) {
        let outputCount = 
            (await askFreeInput("OutputCount", "How many outputs does your tool have?"))
                .OutputCount as number
        for (let i = 0; i < outputCount; i++) {
            let outputName =
                (await askFreeInput("OutputName", "What is the name of the output?"))
                    .OutputName as string
            let isArray =
                (await askYesNo("isArray", "is your output a list of things"))
                    .isArray as boolean
            let outputType =
                (await askChoices("OutputType", "What is the type of the output?", ["File", "Directory", "stdout"]))
                    .OutputType as string
            let outputLocation =
                (await askFreeInput("OutputLocation", "Where is your output located?"))
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

    return allAnswers
}

main().then((res) => console.log(res))