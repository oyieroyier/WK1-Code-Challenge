// Taxable income calculation. Taxable income is the Gross Pay less NSSF contributions.
function lessNssfDeductions(grossPay) {
	if (grossPay < 18000) {
		return grossPay - grossPay * 0.06;
	} else if (grossPay >= 18000) {
		return grossPay - 1080;
	}
}
// console.log(lessNssfDeductions(30000));

/* 
	This next function takes one's taxable Income (calculated above) and deducts NHIF contributions.
	To calculate what one remains with after both deductions, simply chain the functions.
	Use the lessNssfDeductions as an argument to the lessNhifDeductions
	This function also applies a 15% insurance relief on NHIF contributions.
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
const netPay = lessPayeAndRelief(lessNhifDeductions(lessNssfDeductions(72500)));
console.log("Net Pay: KES", netPay);
