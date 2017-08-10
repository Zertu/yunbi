import {dirname, resolve} from 'path'

import {appendFile} from 'fs'

export default function Expectionhandler(e) {
    appendFile('RunTimeError.log',e,err=>{
        if(err)console.error(err)
    })
}
