import bole = require('bole')

export default bole('pnpm')

export type LifecycleMessage = {
  pkgId: string,
  line: string,
}

export type ProgressMessage = {
  pkg: LoggedPkg,
  status: 'resolving'
    | 'resolved'
    | 'fetching'
    | 'fetched'
    | 'error'
    | 'installing'
    | 'installed',
  progress?: {
    done: number,
    total: number,
  },
  keypath?: string[],
}

export type InstallCheckMessage = {
  code: string,
  pkgId: string,
}

export type Log = {
  name: string,
  level: 'debug' | 'info' | 'warn' | 'error',
}

export type ProgressLog = Log & ProgressMessage

export type LifecycleLog = Log & LifecycleMessage

export type InstallCheckLog = Log & InstallCheckMessage

export type LoggedPkg = {
  rawSpec: string,
  name: string,
  version?: string,
}
