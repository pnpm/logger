import bole = require('bole')

export default function() {
  bole.output([
    {
      level: 'debug', stream: process.stdout,
    },
  ])
}
