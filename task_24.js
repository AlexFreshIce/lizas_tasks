// http://www.codewars.com/kata/calculating-with-functions
function zero(myFunc) {
  if (myFunc) {
    return myFunc(0);
  } else {
    return 0;
  }
}
function one(myFunc) {
  if (myFunc) {
    return myFunc(1);
  } else {
    return 1;
  }
}
function two(myFunc) {
  if (myFunc) {
    return myFunc(2);
  } else {
    return 2;
  }
}
function three(myFunc) {
  if (myFunc) {
    return myFunc(3);
  } else {
    return 3;
  }
}
function four(myFunc) {
  if (myFunc) {
    return myFunc(4);
  } else {
    return 4;
  }
}
function five(myFunc) {
  if (myFunc) {
    return myFunc(5);
  } else {
    return 5;
  }
}
function six(myFunc) {
  if (myFunc) {
    return myFunc(6);
  } else {
    return 6;
  }
}
function seven(myFunc) {
  if (myFunc) {
    return myFunc(7);
  } else {
    return 7;
  }
}
function eight(myFunc) {
  if (myFunc) {
    return myFunc(8);
  } else {
    return 8;
  }
}
function nine(myFunc) {
  if (myFunc) {
    return myFunc(9);
  } else {
    return 9;
  }
}

function plus(rNumb) {
  return function (lNumb) {
    return Math.floor(lNumb + rNumb);
  };
}
function minus(rNumb) {
  return function (lNumb) {
    return Math.floor(lNumb - rNumb);
  };
}
function times(rNumb) {
  return function (lNumb) {
    return Math.floor(lNumb * rNumb);
  };
}
function dividedBy(rNumb) {
  return function (lNumb) {
    return Math.floor(lNumb / rNumb);
  };
}
