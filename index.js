function receivesAFunction (thing) {
  return thing();
}

function returnsANamedFunction() {
  return function foo() {};
}

function returnsAnAnonymousFunction() {
  return function() {};
}