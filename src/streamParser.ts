import bole = require('bole')
import ndjson = require('ndjson')
import {Log} from '.'

export type Reporter = (logObj: Log) => void

export interface StreamParser {
  on: (event: 'data', reporter: Reporter) => void,
  removeListener: (event: 'data', reporter: Reporter) => void,
}

const streamParser: StreamParser = ndjson.parse()
bole.output([
  {
    level: 'debug', stream: streamParser,
  },
])

export default streamParser

export function createStreamParser() {
  const sp: StreamParser = ndjson.parse()
  bole.output([
    {
      level: 'debug', stream: sp,
    },
  ])
  return sp
}
