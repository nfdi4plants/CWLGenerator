#!/usr/bin/env cwl-runner

cwlVersion: v1.2
class: CommandLineTool

inputs:
- id: ''
  type: string
  inputBinding:
    prefix: ''
    position: 0

outputs:
- id: WorkingDirectory
  type: Directory
  outputBinding:
    glob: $(runtime.outdir)

baseCommand:
- npm
- run
