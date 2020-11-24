exports.pickOneFrom = (array) => {
  const idx = Math.floor(Math.random() * array.length)
  return array[idx]
}
