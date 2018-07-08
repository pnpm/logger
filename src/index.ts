import logger, {
  Logger,
} from './logger'
import streamParser, {
  createStreamParser,
  LogBase,
} from './streamParser'
import writeToConsole from './writeToConsole'

export default logger

export {
  streamParser,
  createStreamParser,
  writeToConsole,
  LogBase,
  Logger,
}
