export const removeEmptyObject = (obj: any): any => {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    Object.keys(obj).forEach((key) => {
      // Recursively remove empty fields from nested objects
      if (obj[key] && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        removeEmptyObject(obj[key]);
      }

      // Remove the key if its value is null, undefined, or an empty object
      if (obj[key] === null || obj[key] === undefined || (typeof obj[key] === "object" && Object.keys(obj[key]).length === 0)) {
        delete obj[key];
      }
    });
  }
  return obj;
};
