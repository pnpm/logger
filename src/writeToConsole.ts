import bole from 'bole'

export default function() {
  bole.output([
    {
      level: 'debug', stream: process.stdout,
    },
  ])
}
