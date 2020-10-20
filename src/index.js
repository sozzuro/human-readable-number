module.exports = function toReadable (number) {
    const digits = number%10;
  
    if (number < 20) {
      return arrayDigits[number];
    } else if(number >= 20 && number < 100) {
      return arrayTens[Math.floor(number/10)] + (!digits ? '' : ' ' + arrayDigits[digits]);
    } else if(number >= 100 && number < 1000) {
      return arrayDigits[Math.floor(number/100)] + ' hundred' + (number % 100 == 0 ? '' : ' ' + toReadable(number % 100));
    }
  
    return 'error';
  }
  
  const arrayDigits = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']
  const arrayTens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];