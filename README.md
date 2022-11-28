# WK1-Code-Challenge

This is the first Coding challenge for Moringa School's **sdf-ft-03-hybrid** cohort.

The challenge has three parts:

1. Challenge 1: Student Grade Generator (Toy Problem)
2. Challenge 2: Speed Detector (Toy Problem)
3. Challenge 3: Net Salary Calculator (Toy Problem)

## Challenge 1: Student Grade Generator (Toy Problem)

Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

```
- A = 80 to 100
- B = 60 to 79
- C = 50 to 59
- D = 40 to 49
- E = less 40.
```

### Project Setup:

This is a simple program executed purely using JavaScript conditional statements.
Launch the _student_grade_generator.html_ file in browser.
The browser window will prompt you to enter a score.
Enter any score between 0 and 100. Or 200 if you passed too well in your exam.
The browser will return your marks as a grade.

Refresh the browser window to enter another mark in prompt.

## Challenge 2: Speed Detector (Toy Problem)

Write a program that takes as input the speed of a car e.g 80.
If the speed is less than 70, it should print “Ok”.
Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

**For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.**

### Project Setup:

Launch _speed_detector.js_ in a text editor or IDE.
Call the function on line 39 by inputting the speed argument (an actual number) in place of the _speed_ parameter.

#### Project Summary & Thoughts

This is also an intriguing challenge that I implemented using a combination of functions, conditionals and iterating loops.

## Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
Calculate the PAYE (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the links [HERE](https://www.aren.co.ke/payroll/taxrates.ht "LINK") and [HERE](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)

### Project Setup:

Open the _net_salary_calculator.js_ file.
On line 123, passa actual figures as arguments to replace theparemeters _basicPay_ and _benefits_.

#### Project Summary & Thoughts

This was the toughest and most interesting of the challenges and I implemented it using functions calling other functions to arrive at the answer.
I also understood and appreciated the importance of scoping because every time I needed to make a change in my code, all I had to do was edit the values within a function and not touch any other aspect of the code.

## Author - Bob Oyier.

## ISC

### ISC License (ISC)

[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)  
`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
