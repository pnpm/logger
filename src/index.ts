import logger, {
  globalInfo,
  globalWarn,
  Logger,
} from './logger'
import streamParser, {
  createStreamParser,
  LogBase,
  LOG_LEVEL,
} from './streamParser'
import writeToConsole from './writeToConsole'

export default logger

export {
  globalInfo,
  globalWarn,
  streamParser,
  createStreamParser,
  writeToConsole,
  LogBase,
  LOG_LEVEL,
  Logger,
}
