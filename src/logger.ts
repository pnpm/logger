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

export const storeLogger = bole('pnpm:store') as StoreLogger<object>

export interface StoreLogger<T> {
  debug: (log?: T) => void,
  info: (message: string) => void,
  warn: (message: string) => void,
  error: (err: Error, log?: string | Error) => void,
}
