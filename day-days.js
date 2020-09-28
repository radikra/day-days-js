const switchDayLength = daysLength => {
	const modDaysLength = daysLength <= 100 ? (daysLength <= 20 ? daysLength : daysLength % 10) : (daysLength % 100 <= 20 ? daysLength % 100 : daysLength % 10);

	let numEnd = '';
	switch (modDaysLength) {
		case 1:
			numEnd = 'день';
			break;
		case 2:
		case 3:
		case 4:
			numEnd = 'дня';
			break;
		default:
			numEnd = 'дней';
			break;
	}
	return numEnd;
}