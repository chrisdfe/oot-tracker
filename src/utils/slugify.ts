const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/'/g, "");

export default slugify;
