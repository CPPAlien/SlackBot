var randomEmo = [":ghost:", ":grinning:", ":joy:", ":qbi:"]

function getRandomNum(Min, Max) {
	var Range = Max - Min;   
	var Rand = Math.random();   
	return (Min + Math.round(Rand * Range));
}   
var num = getRandomNum(0, 3);

exports.generateEmo = function() {
	return randomEmo[num]
}