import bole = require('bole')

bole.setFastTime()

export default bole('pnpm') as Logger<object | string>

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
