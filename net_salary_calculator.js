// Taxable income calculation. Taxable income is the Gross Pay less NSSF contributions.

/* 
	grossPay = basic salary + benefits
	This function takes the basic pay and benefits/allowances as arguments and returns a gross pay.
*/
function grossPay(basicPay, benefits) {
	return basicPay + benefits;
}
// console.log(grossPay(20000, 14000))

/*
	Statutory NSSF Fund contributions is deducted from one's gross pay.
	This function will take the gross pay and compute the rates applied by NSSF to deduct the social
	security fund contribution.
*/
function lessNssfDeductions(grossPay) {
	if (grossPay <= 18000) {
		return grossPay - grossPay * 0.06;
	} else if (grossPay > 18000) {
		return grossPay - 1080;
	}
}
// console.log(lessNssfDeductions(30000));

/* 
	This next function takes the balance after deduction of NSSF (calculated above) and deducts NHIF contributions
	based on what is left of the pay.
	This function also applies a 15% insurance relief on NHIF contributions.
	To calculate what one remains with after both deductions, simply chain the functions.
	Use the lessNssfDeductions as an argument to the lessNhifDeductions
*/

function lessNhifDeductions(taxablePay) {
	if (taxablePay < 6000) {
		return taxablePay - 150 * 0.85;
	} else if (taxablePay < 8000) {
		return taxablePay - 300 * 0.85;
	} else if (taxablePay < 12000) {
		return taxablePay - 400 * 0.85;
	} else if (taxablePay < 15000) {
		return taxablePay - 500 * 0.85;
	} else if (taxablePay < 20000) {
		return taxablePay - 600 * 0.85;
	} else if (taxablePay < 25000) {
		return taxablePay - 750 * 0.85;
	} else if (taxablePay < 30000) {
		return taxablePay - 850 * 0.85;
	} else if (taxablePay < 35000) {
		return taxablePay - 900 * 0.85;
	} else if (taxablePay < 40000) {
		return taxablePay - 950 * 0.85;
	} else if (taxablePay < 45000) {
		return taxablePay - 1000 * 0.85;
	} else if (taxablePay < 50000) {
		return taxablePay - 1100 * 0.85;
	} else if (taxablePay < 60000) {
		return taxablePay - 1200 * 0.85;
	} else if (taxablePay < 70000) {
		return taxablePay - 1300 * 0.85;
	} else if (taxablePay < 80000) {
		return taxablePay - 1400 * 0.85;
	} else if (taxablePay < 90000) {
		return taxablePay - 1500 * 0.85;
	} else if (taxablePay < 100000) {
		return taxablePay - 1600 * 0.85;
	} else if (taxablePay >= 100000) {
		return taxablePay - 1700 * 0.85;
	}
}
// console.log(lessNhifDeductions(28920));

/* 
	What remains after the NHIF and NSSF deductions is what is subjected to the tax regime.
	This function calculates what remains of one's pay after it has been run through the relevant tax bands.
	The function also factors in a KES 2,400 tax relief that applies to Kenyans.
*/

function lessPayeAndRelief(taxableIncome) {
	if (taxableIncome <= 24000) {
		return taxableIncome - taxableIncome * 0.1 + 2400;
	} else if (taxableIncome > 24000) {
		if (taxableIncome <= 32333) {
			return taxableIncome - (taxableIncome - 24000) * 0.25;
		} else if (taxableIncome > 32333) {
			return taxableIncome - (8333 * 0.25 + (taxableIncome - 32333) * 0.3);
		}
	}
}
// console.log(lessPayeAndRelief(28070));

// Net Pay = Gross Pay less NSSF Deductions less NHIF Deductions less TAX after relief.
/*
	Chaining these functions as shown below, where the value returned from one function is used
	as an argument to the subsequent function calculates the net pay.

	SUMMARY:
		1. A user enters their basic salary and allowances/benefits as arguments to the grossPay function.

		2. The value returned from the grossPay function is passed on as an argument in the
			lessNssfDeductions function for computation of social security deductons.

		3. The value returned from the lessNssfDeductions is passed on to the
			lessNhifDeductions function for computation of health insurance deductions.

		4. The value returned from the lessNhifDeductions function is passed on to the
			lessPayeAndRelief function for computation of tax.

		5. The subsequent result is the net pay for the individual.
*/

const netPay = lessPayeAndRelief(
	lessNhifDeductions(lessNssfDeductions(grossPay(20000, 5000)))
);

console.log("Net Pay: KES", netPay);
