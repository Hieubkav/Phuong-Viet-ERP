/**
 * Utility functions for handling image paths with base URL
 */

/**
 * Get the correct image path with base URL for deployment
 * @param imagePath - Relative path to image (e.g., "pic/01_logo_PV.png")
 * @returns Full path with base URL
 */
export const getImageUrl = (imagePath: string): string => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Get image URL specifically for pic folder
 * @param filename - Image filename (e.g., "01_logo_PV.png")
 * @returns Full path to image in pic folder
 */
export const getPicUrl = (filename: string): string => {
  return getImageUrl(`pic/${filename}`);
};
