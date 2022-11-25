function nhifDeductions(taxablePay) {
	if (taxablePay < 6000) {
		return taxablePay - 150;
	} else if (taxablePay < 8000) {
		return taxablePay - 300;
	} else if (taxablePay < 12000) {
		return taxablePay - 400;
	} else if (taxablePay < 15000) {
		return taxablePay - 500;
	} else if (taxablePay < 20000) {
		return taxablePay - 600;
	} else if (taxablePay < 25000) {
		return taxablePay - 750;
	} else if (taxablePay < 30000) {
		return taxablePay - 850;
	} else if (taxablePay < 35000) {
		return taxablePay - 900;
	} else if (taxablePay < 40000) {
		return taxablePay - 950;
	} else if (taxablePay < 45000) {
		return taxablePay - 1000;
	} else if (taxablePay < 50000) {
		return taxablePay - 1100;
	} else if (taxablePay < 60000) {
		return taxablePay - 1200;
	} else if (taxablePay < 70000) {
		return taxablePay - 1300;
	} else if (taxablePay < 80000) {
		return taxablePay - 1400;
	} else if (taxablePay < 90000) {
		return taxablePay - 1500;
	} else if (taxablePay < 100000) {
		return taxablePay - 1600;
	} else if (taxablePay > 100000) {
		return taxablePay - 1700;
	}
}

function nssfDeductions(grossPay) {
	if (grossPay < 20000) {
		return grossPay - grossPay * 0.06;
	} else if (grossPay > 20000) {
		return grossPay - 18000 * 0.06;
	}
}

function taxableIncome() {
	return nssfDeductions(30000);
}

function paye(taxableIncome) {
	if (taxableIncome <= 24000) {
		return taxableIncome * 0.1;
	} else if (taxableIncome > 24000) {
		if (taxableIncome <= 32333) {
			return 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
		} else if (taxableIncome > 32333) {
			return (
				(taxableIncome - 24000) * 0.1 +
				8333 * 0.25 +
				(taxableIncome - 32333) * 0.3
			);
		}
	}
}

function relief(paye) {
	return paye - 2400
}

console.log(taxableIncome());
