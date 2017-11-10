import bole = require('bole')
import ndjson = require('ndjson')

export interface LogBase {
  level: 'debug' | 'info' | 'warn' | 'error',
}

export type Reporter = (logObj: LogBase) => void

export interface StreamParser {
  on: (event: 'data', reporter: Reporter) => void,
  removeListener: (event: 'data', reporter: Reporter) => void,
}

export default createStreamParser()

export function createStreamParser() {
  const sp: StreamParser = ndjson.parse()
  bole.output([
    {
      level: 'debug', stream: sp,
    },
  ])
  return sp
}
