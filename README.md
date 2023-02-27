# This program will prompt the user for their date of birth, and then it will calculate current age, the day of the week you were born on, and the number of days until your next birthday.

## To use the program, simply run it in a Web console or IDE environment and follow the prompts.

## Version: 1.0.2
## In this optimized version, we've made the following changes:
## Instead of using parseInt() to convert string inputs to numbers, we've used the unary + operator.
## This is a shorter and faster way of converting strings to numbers.
## In the calculateAge() function, we've combined the subtraction and conditional expression into a single line using the ternary operator.
## This makes the code shorter and easier to read.
## In the calculateDaysUntilNextBirthday() function, we've simplified the logic by using a ternary operator instead of an if statement.
## We've also added tail recursion to handle cases where the next birthday falls in the previous year.
## We've removed unnecessary spaces and added semicolons at the end of each statement for consistency.


## Version: 1.0
## In this version, we've added type annotations to the function parameters and return values.
## We've also used the getTime() method to get the time in milliseconds for a Date object, which makes it easier to perform arithmetic on two dates.
## Overall, the functionality is the same as the previous JavaScript version, but with the added benefit of static type checking.

## Ray C. Turner