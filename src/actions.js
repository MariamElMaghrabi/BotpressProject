const isValidEmailSignature = (emailString) => {
  let emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
    let isValidemail=emailfilter.test(emailString);
    if(b === false) {
      return false;
    } else {
      return true;
    }
}

/**
   * Validates Email Signature
   * @title Postgres DB Utility
   * @category Utility
   * @param {string} value - Pass email here
   */
const myAction = async (value) => {
    const userId = event.target
    const botId = event.botId
    const emailString = value
    if (isValidEmailSignature(emailString) === true) {
      temp.message = "Successful"
    } else {
      temp.message = "Invalid email"
    }
  }
 

module.exports = {isValidEmailSignature}


