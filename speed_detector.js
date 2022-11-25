function speedDetector(speed) {
	// Let's get a message that it's ok if speed is less than 70
	if (speed < 70) {
		console.log("Ok");
	} else if (speed > 70) {
		/* 	
			Let's first ensure that the license is always suspended if speed goes over 140km/h
			Because 140 % 70 == 0 and we don't want our counter to reset.
		*/
		if (speed >= 140) {
			console.log("License suspended.");
		} else {
			// Let's have a counter variable to keep track of out iterations.
			let counter = 0;
			/*
				Use the modulus operator to determine how fast above the speed limit the driver is moving.
				So if speed % 70 returns 8, it means the driver is moving at 8km/h above the speed limit.
				Increase the iterator value by 5 in each iteration.
			*/
			for (let i = 0; i < speed % 70; i += 5) {
				counter++;
			}
			if (counter > 12) {
				console.log("License suspended.");
			} else console.log("Points: ", counter);
		}
	}
}

speedDetector(130);
