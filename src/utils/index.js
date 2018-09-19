export function validateInput(input){
	return input.value.length < 5;
}

export function formatTime(time){
	return Math.round(time/1000);
}