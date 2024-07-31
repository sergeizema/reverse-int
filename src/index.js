module.exports = function reverse (n) {
  const numberHandler = String(Math.abs(n)).split('').reverse().join('');

  return numberHandler;
}
