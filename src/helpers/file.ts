export const getFileSizeString = (fileSizeInBytes: number): string => {
  let i = -1;
  const byteUnits = [" kB", " MB", " GB", " TB"];
  do {
    fileSizeInBytes /= 1024;
    i++;
  } while (fileSizeInBytes > 1024);
  return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
};
