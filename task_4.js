// https://www.codewars.com/kata/transportation-on-vacation
function rentalCarCost(d) {
  let rental = d * 40;
  if (d >= 3 && d <= 6) {
    rental = rental - 20;
  }
  if (d >= 7) {
    rental = rental - 50;
  }
  return rental;
}
