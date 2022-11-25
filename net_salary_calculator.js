function nhifDeductions(grossPay) {
	if (grossPay < 6000) {
		return grossPay - 150;
	} else if (grossPay < 8000) {
		return grossPay - 300;
	} else if (grossPay < 12000) {
		return grossPay - 400;
	} else if (grossPay < 15000) {
		return grossPay - 500;
	} else if (grossPay < 20000) {
		return grossPay - 600;
	} else if (grossPay < 25000) {
		return grossPay - 750;
	} else if (grossPay < 30000) {
		return grossPay - 850;
	} else if (grossPay < 35000) {
		return grossPay - 900;
	} else if (grossPay < 40000) {
		return grossPay - 950;
	} else if (grossPay < 45000) {
		return grossPay - 1000;
	} else if (grossPay < 50000) {
		return grossPay - 1100;
	} else if (grossPay < 60000) {
		return grossPay - 1200;
	} else if (grossPay < 70000) {
		return grossPay - 1300;
	} else if (grossPay < 80000) {
		return grossPay - 1400;
	} else if (grossPay < 90000) {
		return grossPay - 1500;
	} else if (grossPay < 100000) {
		return grossPay - 1600;
	} else if (grossPay > 100000) {
		return grossPay - 1700;
	}
}

function nssfDeductions(grossPay) {
	return taxableIncome * 0.94;
}

function reliefs(grossPay) {
	return grossPay - 2400;
}

function tax(taxableIncome) {
	if (taxableIncome <= 32333) {
		if (taxableIncome <= 24000) {
			return taxableIncome * 0.9;
		} else return taxableIncome * 0.75;
	} else if (taxableIncome > 32333) {
		return taxableIncome * 0.7;
	}
}

function netSalary() {
	return reliefs(10000);
}

console.log(netSalary(10000));
