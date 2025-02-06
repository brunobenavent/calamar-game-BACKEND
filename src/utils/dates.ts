export const getCurrentSeason = ( ) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    if (date.getMonth() >= 7) {
        return currentYear;
  } else {
        return currentYear - 1;
  }
}