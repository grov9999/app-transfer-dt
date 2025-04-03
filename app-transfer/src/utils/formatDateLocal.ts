export const formatDateLocal = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Recuerda sumar 1 al mes
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
