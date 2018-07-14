import logger, {
  Logger,
  storeLogger,
  StoreLogger,
} from './logger'
import streamParser, {
  createStreamParser,
  LogBase,
} from './streamParser'
import writeToConsole from './writeToConsole'

export default logger

export {
  streamParser,
  storeLogger,
  StoreLogger,
  createStreamParser,
  writeToConsole,
  LogBase,
  Logger,
}
