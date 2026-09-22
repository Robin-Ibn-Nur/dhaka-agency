/**
 * Utility to resolve asset URLs with basePath support for GitHub Pages.
 * When NEXT_PUBLIC_BASE_PATH is set (e.g. "/dhaka-agency"), it prefixes absolute paths.
 * When not set or empty (local development or root domain like Vercel), it returns the path untouched.
 */
export function assetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
