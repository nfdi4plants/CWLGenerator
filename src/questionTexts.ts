export const toolNameText =
    "What is the name of your tool (without spaces)?\n"
    + "This will be the name of the .cwl file"

export const baseCommandText =
    "What is the basecommand to run your tool (e.g. samtools view)."

export const inputCountText =
    "How many inputs does your tool have?"

export const inputNameText =
    "What is the name you want to assign to the input (e.g. threads)?"

export const inputPrefixText =
    "What is the command prefix for your input (e.g. -t). Press Enter if there is none."

export const inputIsArrayText =
    "Does your input consist of multiple elements (e.g. a list of files or directories)"

export const inputTypeText =
    "What is the type of the input (Directory/File/String/Number)? When your input consists of "
    + "multiple files only specify the type of a single element."

export const outputLocationKnownText =
    "Do you know the location of your output? The location is required as a Glob pattern.\n"
    + "You will be asked to specify it later for each output.\n"
    + "If the location is unknown, the entire working directory will be returned."

export const outputCountText =
    "How many outputs does your tool have?\n"
    + "A result folder for example is a single output."

export const outputNameText = 
    "What is the name you want to assign to the output (e.g. results)?\n"
    + "Warning: Do not repeat a name already assigned for an input."

export const outputIsArrayText =
    "Does your output consist of multiple elements (e.g. a list of files or directories)"

export const outputTypeText =
    "What is the type of the output (Directory/File/stdout)? When your output consists of "
    + "multiple files only specify the type of a single element."

export const outputLocationText =
    "Where is your output located?"
    + "Examples:\n"
    + "- An output directory in the working directory: /myOutputDir\n"
    + "- An output directory in a subfolder of the working directory: /*/myOutputDir\n"
    + "- Files of the same type in the working directory: /*.txt\n"
    + "- Files of the same type in a subfolder of the working directory: /*/*.txt\n"
    + "- If your output directory is specified under inputs: /$(inputs.NameOfTheInput)"

export const stdoutText =
    "How do you want to name your standard output?"