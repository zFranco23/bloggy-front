export const isValidObject = (object: unknown): boolean =>
  Boolean(object) &&
  typeof object === "object" &&
  Object.keys(object ?? {}).length > 0;
