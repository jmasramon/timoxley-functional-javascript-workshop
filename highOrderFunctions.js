module.exports = repeat;

function repeat(operation, num) {
	while(num--) {
		operation();
	}
}