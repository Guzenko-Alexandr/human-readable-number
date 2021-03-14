module.exports = function toReadable(number) {
   const p1 = {
      "1": "one",
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine",
   }
   const p2 = {
      "0": "ten",
      "1": "eleven",
      "2": "twelve",
      "3": "thirteen",
      "4": "fourteen",
      "5": "fifteen",
      "6": "sixteen",
      "7": "seventeen",
      "8": "eighteen",
      "9": "nineteen",
   }
   const p3 = {
      "2": "twenty",
      "3": "thirty",
      "4": "forty",
      "5": "fifty",
      "6": "sixty",
      "7": "seventy",
      "8": "eighty",
      "9": "ninety",
   }


   const result = [];
   const n = number.toString();
   if (number == 0) { return "zero" }
   if (number < 10) {
      result.push(p1[n[0]]);
      return result.join(" ")
   } else if (number >= 100) {
      result.push(p1[n[0]]);
      result.push('hundred');
      number = number - Math.floor(number / 100) * 100;
   }

   if (number >= 10 && number < 20) {
      result.push(p2[n[n.length - 1]]);
   } else {
      result.push(p3[n[n.length - 2]]);
      result.push(p1[n[n.length - 1]]);
   }

   if (result.slice(-1) == " ") {
      return result.slice(0, result.length - 1)
   }
   return result.filter(c => c).join(" ");
}
