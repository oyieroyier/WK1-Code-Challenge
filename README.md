# WK1-Code-Challenge

## Getting Started

In order for you to use the content on this repo ensure you have the following:

- A computer that runs on either of the following; (Windows 7+, Linux, Mac OS)
- nodejs 9.0+
## Installation

To use this repo on your machine requires some simple steps

### Alternative One

- Open a terminal / command line interface on your computer.

- Clone the repo by using the following:

        git clone https://github.com/oyieroyier/WK1-Code-Challenge

- Change directory to the repo folder:

          cd WK1-Code-Challenge

- (Optional) Open it in `Visual Studio Code`

        code .

- (Alternate Option) Open it in any editor of your choice.


### Alternative Two

- On the top right corner of this page there is a button labelled `Fork`.

- Click on that button to fork the repo to your own account.

- Take on the process in `Alternative One` above.

- Remember to replace your username when cloning.

        git clone https://github.com/your-username-here/WK1-Code-Challenge.git


## Challenge 1: Student Grade Generator (Toy Problem)

### Description

Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

```
- A = 80 to 100
- B = 60 to 79
- C = 50 to 59
- D = 40 to 49
- E = less 40.
```

### Running the application

Running the application is very straight forward. 

- Open the student_grade_generator.html file in Mozilla Firefox, Safari or any Chromium-based browser.

- The browser window will prompt you to enter a score.

- Enter any number between 0 and 100. Or above 100 if you think you passed too well in your exam.

- The browser will return your marks as a grade between A and E.

Refresh the browser window to enter another mark in prompt.

## Challenge 2: Speed Detector (Toy Problem)

### Description

Write a program that takes as input the speed of a car e.g 80.
If the speed is less than 70, it should print “Ok”.
Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

### Running the application
Running the application is very straight forward. You can use the following steps to run the app.

- Install required dependencies from npm

      npm install

- On line 30, replace the parameter *speed* paramete in the function with any number.

- Run the speed_detector.js application

      npm start speed_detector.js

## Challenge 3: Net Salary Calculator (Toy Problem)
### Description

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
Calculate the PAYE (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the links [HERE](https://www.aren.co.ke/payroll/taxrates.ht "LINK") and [HERE](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)

### Project Setup:

Open the _net_salary_calculator.js_ file.
On line 123, passa actual figures as arguments to replace theparemeters _basicPay_ and _benefits_.

### Running the application
Running the application is very straight forward. You can use the following steps to run the app.

- Install required dependencies from npm

      npm install

- On line 120, replace the parameters *basicPay* and *benefits* in the function with any numbe.

- Run the speed_detector.js application

      npm net_salary_calculator.js

## Authors

This project was contributed to by:
- [Bob Oyier](https://github.com/oyieroyier/)

## ISC

### ISC License (ISC)

[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)  
`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
