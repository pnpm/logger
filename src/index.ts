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

export default baseLogger as Logger<object | string>

export interface LogBase {
  level: 'debug' | 'info' | 'warn' | 'error',
}

declare function logError<T>(log?: T): void
declare function logError<T>(err: Error, log?: T): void

export interface LogError<T> {
  (err: Error, log?: T): void
  (log?: T): void
}

export interface Logger<T> {
  <Y>(name: string): Logger<Y>,
  debug: (log?: T) => void,
  info: (log?: T) => void,
  warn: (log?: T) => void,
  error: LogError<T>,
}
