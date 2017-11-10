import logger, {streamParser} from 'pnpm-logger'
import test = require('tape')

test('logger logs', t => {
  streamParser.on('data', msg => {
    t.equal(msg['message'], 'foo')
    t.end()
  })

  logger.info('foo')
})
