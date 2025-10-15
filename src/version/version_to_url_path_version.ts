import { type VersionType, versionType } from './version_type.ts';

/**
 * This function converts a version to the URL path version used by Mojang for release article.
 * 
 * @example
 * ```
 * versionToUrlPathVersion('1.21.10', versionType.RELEASE) // minecraft-java-edition-1-21-10
 * ```
 * @param version The version
 * @param type The type of the version
 * @returns The converted URL path version
 */
export function versionToUrlPathVersion(
  version : string,
  type : VersionType = versionType.RELEASE
) : string {
  if (type === versionType.RELEASE) {
    return `minecraft-java-edition-${version.replace('.', '-')}`;
  } else {
    return `minecraft-snapshot-${version}`;
  }
}
