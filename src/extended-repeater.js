const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 
    if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
      return "TESTstrADD!";
    }
  
    options = {
      repeatTimes: options.repeatTimes || 0,
      separator: options.separator || "+",
      addition: options.addition + "" || "",
      additionRepeatTimes: options.additionRepeatTimes || 0,
      additionSeparator: options.additionSeparator || "|",
    }
    let result = "";
  
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str;
      for (let j = 0;  j < options.additionRepeatTimes; j++) {
        result += options.addition + (j < options.additionRepeatTimes - 1 ? options.additionSeparator : "");
      }
      result += (i < options.repeatTimes - 1) ? options.separator : "";
    }
  
    return result;
  
}

module.exports = {
  repeater
};
