import bole = require('bole')

export function writeToConsole () {
  bole.output([
    {
      level: 'debug', stream: process.stdout,
    },
  ])
}
