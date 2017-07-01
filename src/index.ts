import bole = require('bole')

export default bole('pnpm')

export type LifecycleMessage = {
  pkgId: string,
  line: string,
}

export type ProgressMessage = {
  pkgId: string,
  status: 'fetched' | 'installed' | 'dependencies_installed' | 'found_in_store' | 'resolving_content',
} | {
  pkgId: string,
  pkg: LoggedPkg,
  status: 'resolved',
} | {
  pkg: LoggedPkg,
  status: 'resolving' | 'error' | 'installing',
} | {
  pkgId: string,
  status: 'fetching',
  progress?: {
    done: number,
    total: number,
  },
} | {
  status: 'downloaded_manifest',
  pkgId: string,
  pkgVersion: string,
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
  dependentId?: string,
}
