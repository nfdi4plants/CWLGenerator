import * as cwltsauto from 'cwl-ts-auto'

cwltsauto.loadDocument('resources/test.cwl').then((loadedDocument) => {console.log(loadedDocument)})