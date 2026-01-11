/**
 * Dynamically finds the DMG file in the public directory at build time.
 * Assumes there is only one .dmg file in the public folder.
 */
export function getDmgPath(): string {
    const dmgFiles = import.meta.glob('/public/*.dmg', { eager: true, query: '?url', import: 'default' });
    const paths = Object.keys(dmgFiles);

    if (paths.length === 0) {
        console.warn('No DMG file found in public directory');
        return '#';
    }

    // Extract the filename from the path (e.g., "/public/BonsAI_0.3.1_aarch64.dmg" -> "/BonsAI_0.3.1_aarch64.dmg")
    const fullPath = paths[0];
    const filename = fullPath.replace('/public', '');

    return filename;
}
