import ndjson = require('ndjson')
import bole = require('bole')
import {Log} from '.'

export type Reporter = (logObj: Log) => void

export type StreamParser = {
  on: (event: 'data', reporter: Reporter) => void,
  removeListener: (event: 'data', reporter: Reporter) => void,
}

const streamParser: StreamParser = ndjson.parse()
bole.output([
  {
    level: 'debug', stream: streamParser
  },
])

export default streamParser

export function createStreamParser () {
  const streamParser: StreamParser = ndjson.parse()
  bole.output([
    {
      level: 'debug', stream: streamParser
    },
  ])
  return streamParser
}
