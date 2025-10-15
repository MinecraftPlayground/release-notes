export const versionType = {
  RELEASE: 'release',
  SNAPSHOT: 'snapshot'
}

export type VersionType = typeof versionType[keyof typeof versionType]
