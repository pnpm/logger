import streamParser, {createStreamParser} from './streamParser'
import writeToConsole from './writeToConsole'

export {
  streamParser,
  createStreamParser,
  writeToConsole,
}

import bole = require('bole')

bole.setFastTime()

const baseLogger = bole('pnpm')

export default baseLogger

export interface LogBase {
  level: 'debug' | 'info' | 'warn' | 'error',
}

export interface Logger<T> {
  debug: (log: T) => void,
  info: (log: T) => void,
  warn: (log: T) => void,
  error: (log: T) => void,
}
