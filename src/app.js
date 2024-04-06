const FIRST_POSITION = 0;

const _getFibonacciNumber = (index) => {
  if (index < 2){
    return index;
  }
  return _getFibonacciNumber(index - 1) + _getFibonacciNumber(index - 2);
}

const _isLessThanZero = (number) => {
  return number < 0;
}

const _printFibonacciNumber = (fibonacciNumber) => {
  console.log(_getFibonacciNumber(fibonacciNumber));
}

const getFibonacciSequece = (positionQuantity) => {
  if (_isLessThanZero(positionQuantity)){
    return _getFibonacciNumber(FIRST_POSITION);
  }
  _printFibonacciNumber(positionQuantity);
  const previousPosition = positionQuantity -1;
  return getFibonacciSequece(previousPosition);
}

getFibonacciSequece(10);