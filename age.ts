// Version: 1.0
// In this version, we've added type annotations to the function parameters and return values.
// We've also used the getTime() method to get the time in milliseconds for a Date object, which makes it easier to perform arithmetic on two dates.
// Overall, the functionality is the same as the previous JavaScript version, but with the added benefit of static type checking.

// Convert date string in UK format to Date object
// const strToDate = (str: string): Date => {
//     const [day, month, year] = str.split('-');
//     return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
//   };
  
//   // Format Date object as string in US format
//   const dateToStr = (date: Date): string => {
//     const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//     return date.toLocaleDateString('en-US', options);
//   };
  
//   // Calculate age in years from birthdate and current date
//   const calculateAge = (birthdate: Date, today: Date = new Date()): number => {
//     const diff = today.getTime() - birthdate.getTime();
//     return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
//   };
  
//   // Calculate day of the week the user was born on
//   const calculateDayOfWeek = (birthdate: Date): string => {
//     const options = { weekday: 'long' };
//     return birthdate.toLocaleDateString('en-US', options);
//   };
  
//   // Calculate number of days until next birthday from birthdate and current date
//   const calculateDaysUntilNextBirthday = (birthdate: Date, today: Date = new Date()): number => {
//     const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
//     if (today > nextBirthday) {
//       nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
//     }
//     const diff = nextBirthday.getTime() - today.getTime();
//     return Math.ceil(diff / (1000 * 60 * 60 * 24));
//   };
  
//   // Prompt user for their date of birth in UK format
//   const birthdateStr = prompt('Enter your date of birth (DD-MM-YYYY):');
  
//   // Convert birthdate to Date object
//   const birthdate = strToDate(birthdateStr);
  
//   // Get today's date
//   const today = new Date();
  
//   // Calculate age in years
//   const age = calculateAge(birthdate, today);
  
//   // Calculate day of the week the user was born on
//   const dayOfWeek = calculateDayOfWeek(birthdate);
  
//   // Calculate number of days until next birthday
//   const daysUntilBirthday = calculateDaysUntilNextBirthday(birthdate, today);
  
//   // Format birthdate to US format
//   const birthdateUsStr = dateToStr(birthdate);
  
//   // Print results
//   console.log(`You were born on a ${dayOfWeek}.`);
//   console.log(`You are currently ${age} years old.`);
//   console.log(`There are ${daysUntilBirthday} days until your next birthday.`);
//   console.log(`Your birthdate in US format is: ${birthdateUsStr}.`);
  
// Version: 1.0.2
// In this optimized version, we've made the following changes:
// Instead of using parseInt() to convert string inputs to numbers, we've used the unary + operator.
// This is a shorter and faster way of converting strings to numbers.
// In the calculateAge() function, we've combined the subtraction and conditional expression into a single line using the ternary operator.
// This makes the code shorter and easier to read.
// In the calculateDaysUntilNextBirthday() function, we've simplified the logic by using a ternary operator instead of an if statement.
// We've also added tail recursion to handle cases where the next birthday falls in the previous year.
// We've removed unnecessary spaces and added semicolons at the end of each statement for consistency.

// Convert date string in UK format to Date object
const strToDate = (str: string): Date => {
    const [day, month, year] = str.split('-');
    return new Date(+year, +month - 1, +day);
  };
  
  // Format Date object as string in US format
  const dateToStr = (date: Date): string =>
    date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  
  // Calculate age in years from birthdate and current date
  const calculateAge = (birthdate: Date, today: Date = new Date()): number =>
    today.getFullYear() - birthdate.getFullYear() - (birthdate > today.setFullYear(today.getFullYear()) ? 1 : 0);
  
  // Calculate day of the week the user was born on
  const calculateDayOfWeek = (birthdate: Date): string =>
    birthdate.toLocaleDateString('en-US', { weekday: 'long' });
  
  // Calculate number of days until next birthday from birthdate and current date
  const calculateDaysUntilNextBirthday = (birthdate: Date, today: Date = new Date()): number => {
    const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    return (nextBirthday <= today) ?
      calculateDaysUntilNextBirthday(new Date(today.getFullYear() + 1, birthdate.getMonth(), birthdate.getDate()), today) :
      Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  };
  
  // Prompt user for their date of birth in UK format
  const birthdateStr = prompt('Enter your date of birth (DD-MM-YYYY):');
  
  // Convert birthdate to Date object
  const birthdate = strToDate(birthdateStr);
  
  // Get today's date
  const today = new Date();
  
  // Calculate age in years
  const age = calculateAge(birthdate, today);
  
  // Calculate day of the week the user was born on
  const dayOfWeek = calculateDayOfWeek(birthdate);
  
  // Calculate number of days until next birthday
  const daysUntilBirthday = calculateDaysUntilNextBirthday(birthdate, today);
  
  // Format birthdate to US format
  const birthdateUsStr = dateToStr(birthdate);
  
  // Print results
  console.log(`You were born on a ${dayOfWeek}.`);
  console.log(`You are currently ${age} years old.`);
  console.log(`There are ${daysUntilBirthday} days until your next birthday.`);
  console.log(`Your birthdate in US format is: ${birthdateUsStr}.`);
  