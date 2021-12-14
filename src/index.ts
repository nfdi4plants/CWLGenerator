import * as inquirer from 'inquirer'

console.log('CWLGenerator!')
let allanswers: any[] = []

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
                choices: ["File", "Directory", "Number"]
            },
        ])
        allInputs.push(answers)
    }
    return allInputs
}

async function main() {
    let answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'basecommand',
            message: "What is the basecommand to run your tool (e.g. samtools view)",
        }, {
            type: 'input',
            name: 'inputCount',
            message: "How many inputs does your tool have?",
        },
    ])

    let inputs = await generateInputs(answers.inputCount)

    return inputs
}


main().then((result)=> {console.log(result)})