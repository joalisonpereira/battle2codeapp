export default function formatTime(time){
	let strTime=String(Math.round(time/1000));
	return strTime.split(":")[0];
}