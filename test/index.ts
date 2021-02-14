import logger, {streamParser} from '@pnpm/logger'
import test from 'tape'

test('logger logs', t => {
  streamParser.on('data', msg => {
    t.equal(msg['message'], 'foo')
    t.end()
  })

  logger.info({message: 'foo', prefix: process.cwd()})
})
