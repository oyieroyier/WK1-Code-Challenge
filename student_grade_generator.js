function studentGrade(marks) {
	// Nest the subsequent conditionals below this conditional so that grades are capped at 100.
	if (marks <= 100) {
		// Make sure the marks are 100 and below but not less than 0
		if (marks < 0) {
			console.log("Please enter a number greater than or equal to 0.");
		} else if (marks > 79) {
			console.log(`The grade for ${marks} marks is: A`);
		} else if (marks > 60) {
			console.log(`The grade for ${marks} marks is: B`);
		} else if (marks > 59) {
			console.log(`The grade for ${marks} marks is: C`);
		} else if (marks > 40) {
			console.log(`The grade for ${marks} marks is: D`);
		} else if (marks < 40) {
			console.log(`The grade for ${marks} marks is: E`);
		}
	} // Eliminate grades above 100 marks.
	else if (marks > 100)
		console.log(
			"Sorry, we know you worked so hard but scores can't be more than 100"
		);
}

studentGrade(87);
studentGrade(201);
studentGrade(-123);
studentGrade(32);
studentGrade(67);
studentGrade(40);
studentGrade("nana");
