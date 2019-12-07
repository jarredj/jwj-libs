function isNumeric( input ) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}

function isPureNumber( input ) {
  return /^\-?\d*\.?\d+$/.test(input); 
}

function isPureInteger( input ) {
  return /^\-?\d+$/.test(input);
}
