function reverseArray(array) {
  if (!Array.isArray(array)) {
    return "Nieprawidłowe wartości. Wprowadź dowolną tablicę.";
  } else {
    const array2 = [...array].reverse();
    return array2;
  }
}
