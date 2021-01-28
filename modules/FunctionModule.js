const celToFahr = (celsius) => {
  const cTemp = celsius;
  const cToFahr = (cTemp * 9) / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  return message;
};

const fahrToCel = (fahrenheit) => {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  var message = fTemp + "\xB0F is " + fToCel + "\xB0C.";
  return message;
};

const kelToFhar = (kel) => {
  var kTemp = kel;
  var kTofhr = (kTemp - 273.15) * 1.8 + 32;
  var message = kTemp + "\xB0K is " + kTofhr + "\xB0F.";
  return message;
};

const fharTokel = (fhar) => {
    var fTemp = fhar;
    var fharToKel = ((fTemp-32)/1.8)+273.15;;
    var message = fTemp + "\xB0F is " + fharToKel + "\xB0K.";
    return message;
  };
  

exports.celToFahr = celToFahr;
exports.fahrToCel = fahrToCel;
exports.kelToFhar = kelToFhar;
exports.fharTokel = fharTokel;
