//------------------------------------------ Print a table containing multiplication tables ------------------------------------------//

// function multiTable(max){
//     let table = ""
    
//     for(let i=1; i<=max ; i++){
//         for(let j=1 ; j<=max;j++){
//             table += (i * j).toString().padStart(4,' ') + ' ';
//         }
//         table += '\n'
//     }
//     console.log(table)
// }
// multiTable(10);

//------------------------------------------ Create a length converter function ------------------------------------------//

// function lengthConverter(length, fromUnit, toUnit) {
//     const conversionFactors = {
//       "km": 1000,
//       "m": 1,
//       "cm": 0.01,
//       "mm": 0.001,
//       "in": 0.0254,
//       "ft": 0.3048,
//       "yd": 0.9144,
//       "mi": 1609.34,
//     };
  
//     const lengthInMeters = length * conversionFactors[fromUnit];
//     const convertedLength = lengthInMeters / conversionFactors[toUnit];
  
//     return convertedLength;
//   }
  
//   const kilometers = 10;
//   const miles = lengthConverter(kilometers, "km", "mi");
//   console.log(`${kilometers} kilometers is equal to ${miles} miles`);
  
//   const meters = 5;
//   const centimeters = lengthConverter(meters, "m", "cm");
//   console.log(`${meters} meters is equal to ${centimeters} centimeters`);
  
//   const inches = 12;
//   const feet = lengthConverter(inches, "in", "ft");
//   console.log(`${inches} inches is equal to ${feet} feet`);
  
//   const milesToKm = lengthConverter(miles, "mi", "km");
//   console.log(`${miles} miles is equal to ${milesToKm} km`);
  
//   const invalidUnit = lengthConverter(10, "xyz", "mi");
//   console.log(invalidUnit);
  
//   const invalidUnit2 = lengthConverter(10, "km", "abc");
//   console.log(invalidUnit2);
  
//   console.log(lengthConverter(1, "km", "m"));
//   console.log(lengthConverter(100, "cm", "m"));
//   console.log(lengthConverter(3, "ft", "in"));
//   console.log(lengthConverter(2, "yd", "m"));
//   console.log(lengthConverter(1, "mi", "km"));
//   console.log(lengthConverter(1000, "m", "km"));
//   console.log(lengthConverter(1, "m", "cm"));
//   console.log(lengthConverter(12, "in", "ft"));
//   console.log(lengthConverter(2, "m", "yd"));
//   console.log(lengthConverter(1.60934, "km", "mi"));

//------------------------------------------ Check if a string is a palindrome ------------------------------------------//


function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Check if the string is equal to its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
 
  console.log(isPalindrome("Nayan"));
  console.log(isPalindrome("hellow"));
  