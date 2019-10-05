import bole = require('bole')

bole.setFastTime()

export default bole('pnpm') as Logger<object>

export interface Logger<T> {
  <Y>(name: string): Logger<Y>,
  debug: (log?: T) => void,
  info: (log: {message: string, prefix: string}) => void,
  warn: (log: {message: string, prefix: string, error?: Error}) => void,
  error: (err: Error, log?: string | Error) => void,
}

const globalLogger = bole('pnpm:global')

export function globalWarn(message: string) {
  globalLogger.warn(message)
}

export function globalInfo(message: string) {
  globalLogger.info(message)
}
