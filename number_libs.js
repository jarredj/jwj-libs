export function isNumeric( input ) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}

export function isPureNumber( input ) {
  return /^\-?\d*\.?\d+$/.test(input); 
}

export function isPureInteger( input ) {
  return /^\-?\d+$/.test(input);
}
