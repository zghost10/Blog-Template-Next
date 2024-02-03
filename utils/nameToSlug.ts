export const nameToSlug = (string: string) => {
  return string.toLowerCase().normalize("NFD").replaceAll(' ','-').replace(/[\u0300-\u036f]/g, "");
}